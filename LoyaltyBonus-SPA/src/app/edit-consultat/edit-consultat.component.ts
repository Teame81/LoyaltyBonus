import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-consultat',
  templateUrl: './edit-consultat.component.html',
  styleUrls: ['./edit-consultat.component.css'],
})
export class EditConsultatComponent implements OnInit {
  consultants: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getConsultants();
  }
  getConsultants() {
    this.http.get('http://localhost:5000/api/consultants').subscribe(
      (response) => {
        this.consultants = response;
        //console.log(this.consultants);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
