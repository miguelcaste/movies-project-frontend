import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Playlist } from '../model/playlist.model';
import { Movie } from '../model/movie.model';
import { Profile } from '../model/profile.model';

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


    getMovie(id:string): Observable<any>{
      return this.http.get<any>(this.baseUrl+'/movies'+'/'+id);
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
    deletePlaylist(id:string|null): Observable<any>{
      return this.http.delete<any>(this.baseUrl+'/playlists'+'/'+id);
    }

    // Obtener playlist por id
    getPlaylist(id:string): Observable<any>{
      return this.http.get<any>(this.baseUrl+'/playlists'+'/'+id);
    }

    // Añadir una pelicula a una playlist

    addMovieToPlaylist(id:string|null,movie:Movie): Observable<any>{
      let body = JSON.stringify(movie);
      body = body.replace(/"_/g, '"');
      console.log(body);
      return this.http.post<Movie>(this.baseUrl + '/movies'+'/'+id, body, {headers: {'Content-Type': 'application/json; charset=utf-8'}})

    }

  // ----- PROFILE ----


    // Comprobar usuario y contraseña

    addProfile(profile:Profile): Observable<any>{
      let body = JSON.stringify(profile);
      body = body.replace(/"_/g, '"');
      console.log(body);
      return this.http.post<Playlist>(this.baseUrl + '/profiles', body, {headers: {'Content-Type': 'application/json; charset=utf-8'}})
      }



}
