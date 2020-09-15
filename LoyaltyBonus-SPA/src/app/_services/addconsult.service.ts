import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddconsultService {
  baseUrl = 'http://127.0.0.1:5000/api/auth/';

  constructor(private http: HttpClient) {}
}
