import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AddconsultService } from '../_services/addconsult.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-add-consultant',
  templateUrl: './add-consultant.component.html',
  styleUrls: ['./add-consultant.component.css'],
})
export class AddConsultantComponent implements OnInit {
  @Output() cancelAdd = new EventEmitter();
  model: any = {};
  constructor(
    private alertify: AlertifyService,
    private addconsultService: AddconsultService
  ) {}

  ngOnInit(): void {}

  addConsultant() {
    this.addconsultService.addConsultant(this.model).subscribe(
      () => {
        this.alertify.success('Success');
        console.log(this.model);
      },
      (error) => {
        this.alertify.success('Error');
        console.log(this.model);
      }
    );
  }
  cancel() {
    this.cancelAdd.emit(false);
  }
}
