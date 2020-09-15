import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EditconsultService {
  baseUrl = environment.apiUrl + 'consultants/';

  constructor(private http: HttpClient) {}

  editConsultant(model: any) {
    return this.http.put(this.baseUrl + 'editconsult/' + model.id, model);
  }
}
