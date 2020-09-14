import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css'],
})
export class ConsultantComponent implements OnInit {
  consultants: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getConsultants();
  }

  getConsultants() {
    this.http.get('http://localhost:5000/api/consultants').subscribe(
      (response) => {
        this.consultants = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
