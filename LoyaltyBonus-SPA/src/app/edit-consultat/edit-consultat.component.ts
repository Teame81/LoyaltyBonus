import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { EditconsultService } from '../_services/editconsult.service';

@Component({
  selector: 'app-edit-consultat',
  templateUrl: './edit-consultat.component.html',
  styleUrls: ['./edit-consultat.component.css'],
})
export class EditConsultatComponent implements OnInit {
  consultants: any;
  model: any = {};
  currentIdSelected: any;

  constructor(
    private http: HttpClient,
    private editConsultService: EditconsultService,
    private alertify: AlertifyService,
    private elRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getConsultants();
  }
  getConsultants() {
    this.http.get('http://localhost:5000/api/consultants').subscribe(
      (response) => {
        this.consultants = response;
        for (const consult of this.consultants) {
          // Cleaning away timie
          consult.employmentDate = consult.employmentDate.split('T')[0];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  editConsultant() {
    this.editConsultService.editConsultant(this.model).subscribe(
      () => {
        this.alertify.success('Updated');
        console.log(this.model);
      },
      (error) => {
        this.alertify.success('Error');
        console.log(this.model);
      }
    );
  }
  deselect() {
    console.log('Deselected');
  }
  whatId(id: any) {
    this.currentIdSelected = id;
    console.log(this.consultants);
    const nameField = this.elRef.nativeElement.querySelector('[name=username]');
    const employmentField = this.elRef.nativeElement.querySelector(
      '[name=date]'
    );
    const invoiceField = this.elRef.nativeElement.querySelector(
      '[name=invoiceHours]'
    );
    for (const consult of this.consultants) {
      if (consult.id === this.currentIdSelected) {
        nameField.value = consult.name;
        employmentField.value = consult.employmentDate;
        invoiceField.value = consult.invoiceHoursWorkedThisYear;
      }
    }

    // console.log(this.consultants);

    console.log(this.currentIdSelected);
  }
}
