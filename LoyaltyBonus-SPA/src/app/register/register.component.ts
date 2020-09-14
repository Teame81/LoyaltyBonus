import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log('Yeyyy!');
      },
      (error) => {
        console.log('Nooo boooh');
      }
    );
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.cancelRegister.emit(false);
  }
}
