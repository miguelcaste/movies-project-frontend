import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImdbServiceService {

  private readonly baseUrl="https://imdb-api.com/en/API"


  // Para imagenes y titulo
  private readonly searchMovie="SearchMovie";

  // necesito el id
  // imagen, año, director y star
  private readonly title="Title";

  private readonly api="k_ewh6f4fm";

  constructor(
    private http: HttpClient

  ) { }

  // Buscar una pelicula. Ejemplo: https://imdb-api.com/en/API/SearchMovie/k_ewh6f4fm/Orange

  search(title:String): Observable<any>{
    return this.http.get<any>(this.baseUrl+'/'+this.searchMovie+'/'+this.api+'/'+title);
  }

  // Obtener mas datos sobre esa pelicula Ejemplo: https://imdb-api.com/en/API/Title/k_ewh6f4fm/tt0066921

  obtainMoreInfo(id:string): Observable<any>{
    return this.http.get<any>(this.baseUrl+'/'+this.title+'/'+this.api+'/'+id);
  }


}
