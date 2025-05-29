import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private  http: HttpClient) { }

  getAllEvents(): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/allEvents")
  }

  addEvent(data : any): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/add",data)
  }

  getEventById(id : number): Observable<any> {
    return this.http.get("http://localhost:8080/api/v1/event/${id}")
  }


}
