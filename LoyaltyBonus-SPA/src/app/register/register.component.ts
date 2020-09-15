import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        this.alertify.success('Success');
      },
      (error) => {
        this.alertify.success('Error');
      }
    );
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.cancelRegister.emit(false);
  }
}
