import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddconsultService {
  baseUrl = environment.apiUrl + 'consultants/';

  constructor(private http: HttpClient) {}

  addConsultant(model: any) {
    return this.http.post(this.baseUrl + 'addconsult', model);
  }
}
