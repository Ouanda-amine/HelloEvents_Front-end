import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/allClients")
  }

  AddClient(data : any): Observable<any>{
    return this.http.post("http://localhost:8080/api/v1/addClient", data);
  }
}
