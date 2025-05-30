import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http : HttpClient) {

  }

  signUp(data : any): Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/auth/register", data);
  }
}
