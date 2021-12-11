import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Playlist } from '../model/playlist.model';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private readonly baseUrl="http://localhost:8080"


  constructor(
    private http: HttpClient
  ) { }

  // Los separo aunque realmente es edge el que lo controla

  // ----- MOVIES ----
    // Obtener las peliculas

    getAllMovie(): Observable<any>{
      return this.http.get<any>(this.baseUrl+'/movies');
    }

  // ----- PLAYLIST ----

    // Añadir una playlist

    addPlaylist(playlist:Playlist): Observable<any>{
      let body = JSON.stringify(playlist);
      body = body.replace(/"_/g, '"');
      console.log(body);
      return this.http.post<Playlist>(this.baseUrl + '/playlists', body, {headers: {'Content-Type': 'application/json; charset=utf-8'}})
      }

    // Obtener las playlist

    getAllPlaylists(): Observable<any>{
      return this.http.get<any>(this.baseUrl+'/playlists');
    }

    // Borrar una playlist

    // Añadir una pelicula a una playlist

  // ----- PROFILE ----


    // Comprobar usuario y contraseña





}
