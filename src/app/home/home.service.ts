import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private userUrl: string = environment.apiUrl + 'users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.userUrl);
  }

  addUser(){
    return this.http.post(this.userUrl,'');
  }

  deleteUser(strUserId) {
    return this.http.delete(this.userUrl + '/' + strUserId);
  }


}
