import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditconsultService {
  baseUrl = environment.apiUrl + 'consultants/';

  constructor(private http: HttpClient) {}

  editConsultant(id: any, model: any) {
    console.log('Services: ' + 'id: ' + id + ' Model: ' + model);
    console.log(model);
    if (model.employmentDate.lenght > 10) {
      let json = JSON.stringify(model.employmentDate);
      console.log(model.employmentDate);
      json = json.substring(1);
      console.log('after substring:' + json);
      json = json.split('T')[0];
      console.log('after split:' + json);
      console.log('the date: ' + json);
      model.employmentDate = json;
    }
    return this.http.put(this.baseUrl + 'editconsult/' + id, model);
  }

  deleteConsultant(id: any) {
    return this.http.delete(this.baseUrl + 'delconsult/' + id);
  }
}
