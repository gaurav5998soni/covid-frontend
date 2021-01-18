import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.covid19india.org/v4/data.json";
  constructor(private http: HttpClient) { }

  retriveDate(){
    return this.http.get("http://localhost:8080/api/");
  }

  
}
