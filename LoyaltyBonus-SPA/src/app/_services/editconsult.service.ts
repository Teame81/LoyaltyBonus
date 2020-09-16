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
    let json = JSON.stringify(model.employmentdate);
    json = json.substring(1);
    json = json.split('T')[0];
    console.log('the date: ' + json);
    model.employmentdate = json;

    return this.http.put(this.baseUrl + 'editconsult/' + id, model);
  }

  deleteConsultant(id: any) {
    return this.http.delete(this.baseUrl + 'delconsult/' + id);
  }
}
