import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  consultants: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getConsultants();
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
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
