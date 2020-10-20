import { HttpClient } from '@angular/common/http';
import { getTranslationDeclStmts } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-calculate-bonus',
  templateUrl: './calculate-bonus.component.html',
  styleUrls: ['./calculate-bonus.component.css'],
})
export class CalculateBonusComponent implements OnInit {
  consultants: any;
  totalPoints: any;
  companyEarnings: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getConsultants();
  }

  getConsultants(totalEarnings?: number) {
    this.totalPoints = 0;
    this.companyEarnings = 0;
    this.http.get('http://api.timmieonline.com/api/consultants').subscribe(
      (response) => {
        this.consultants = response;
        // tslint:disable-next-line: forin
        for (const consult of this.consultants) {
          const employmentDate = new Date(consult.employmentDate);
          // Cleaning away timie
          consult.employmentDate = consult.employmentDate.split('T')[0];
          consult.EmploymentYears = this.diffTime(employmentDate);

          consult.LoyaltyFactor = this.calculateLoyaltyFactor(
            consult.EmploymentYears
          );
          consult.Points = this.calculatePoints(
            consult.invoiceHoursWorkedThisYear,
            consult.LoyaltyFactor
          );
          this.totalPoints += consult.Points;
          if (totalEarnings) {
            const percent = consult.Points / this.totalPoints;
            console.log('Percent:' + percent);
            const bonusPool = totalEarnings * 0.05;
            console.log('Bonus pool: ' + bonusPool);
            const bonusConsultant = bonusPool * percent;
            console.log('Consult bonus: ' + bonusConsultant);
            consult.Bonus = bonusConsultant;
          }
          console.log(consult);
        }
        console.log(this.consultants);
        console.log('Total points: ' + this.totalPoints);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  diffTime(employmentDate) {
    const today = new Date();
    console.log(today);
    const timeBetweenSek = Math.abs(
      today.valueOf() - +employmentDate.valueOf()
    );
    const toDays = Math.ceil(timeBetweenSek / (1000 * 3600 * 24));
    const toYear = Math.floor(toDays / 365);
    return toYear;
  }
  calculateLoyaltyFactor(employmentYears) {
    if (employmentYears === 0) {
      return 1;
    } else if (employmentYears === 1) {
      return 1.1;
    } else if (employmentYears === 2) {
      return 1.2;
    } else if (employmentYears === 3) {
      return 1.3;
    } else if (employmentYears === 4) {
      return 1.4;
    } else if (employmentYears >= 5) {
      return 1.5;
    }
    //safty fallback bellow
    return 1;
  }
  calculatePoints(invoiceHours, loyaltyFactor) {
    return invoiceHours * loyaltyFactor;
  }
  calculateProfit() {
    console.log(this.companyEarnings);
    this.getConsultants(this.companyEarnings);
  }
}
