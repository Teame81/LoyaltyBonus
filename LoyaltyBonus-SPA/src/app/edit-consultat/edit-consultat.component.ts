import { NgForOf, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { EditconsultService } from '../_services/editconsult.service';
import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment'; // add this 1 of 4


@Component({
  selector: 'app-edit-consultat',
  templateUrl: './edit-consultat.component.html',
  styleUrls: ['./edit-consultat.component.css'],
})
export class EditConsultatComponent implements OnInit {
  consultants: any = [];
  model: any = {};

  currentTextId = '';
  currentName = '';
  currentDate = '';
  currentInvoice = '';

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
    this.http.get('http://api.timmieonline.com/api/consultants').subscribe(
      (response) => {
        this.consultants = response;
        for (const consult of this.consultants) {
          // Cleaning away time
          consult.employmentDate = consult.employmentDate.split('T')[0];
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }


  editConsultant(formData: any) {
    console.log('From edit: ');
    console.log(formData);
    console.log("Emp DATE: ");
    console.log(formData.employmentDate);
    //formData.employmentDate = "2222-22-22";
    console.log("LENGTH DATE:");
    console.log(formData.employmentDate.toString().length);
    if (formData.employmentDate.toString().length > 10) {
      //let json = formData.employmentDate.toString();
      Date.prototype.toJSON = function(){ return moment(this).format(); }
      let json = JSON.stringify(formData.employmentDate);
      console.log('After JSON Stringify:');
      console.log(json);
      json = json.substring(1);
      console.log('after substring:' + json);
      json = json.split('T')[0];
      console.log('after split:' + json);
      console.log('the date: ' + json);
      formData.employmentDate = json;
      console.log('After ASSING DATE FROMAT: ');
      console.log(formData.employmentDate);
    }
    console.log('After From edit: ');
    console.log(formData);
    this.editConsultService.editConsultant(this.currentTextId, formData).subscribe(
      () => {
        this.getConsultants();

        this.alertify.success('Updated');
        console.log(formData);
      },
      (error) => {
        this.alertify.success('Error');
        console.log(formData);
      }
    );
  
  }


  whatId(id: any) {
    this.currentTextId = id;
    console.log(this.consultants);

 
 
    for (const consult of this.consultants) {
      if (consult.id === this.currentTextId) {
       console.log("From whatId");
       console.log(consult);
       this.currentName = consult.name;
       this.currentDate = consult.employmentDate;
       this.currentInvoice = consult.invoiceHoursWorkedThisYear;
      }
    }

    // console.log(this.consultants);

    console.log(this.currentTextId);
    console.log(this.currentName);
    console.log(this.currentDate);
    console.log(this.currentInvoice);
  }
  deleteConsult(id: any) {
    console.log('Delete: ' + id);
    this.editConsultService.deleteConsultant(id).subscribe();
    location.reload();
  }
}
