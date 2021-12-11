import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private readonly baseUrl="http://localhost:8080"


  constructor(
    private http: HttpClient
  ) { }

    getAllMovie(): Observable<any>{
      return this.http.get<any>(this.baseUrl+'/movies');
    }
}
