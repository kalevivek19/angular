import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Home } from './home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiUrl: string = 'http://api.larangular.com/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllCompanies() {
    return this.http.get(this.apiUrl);
  }

}
