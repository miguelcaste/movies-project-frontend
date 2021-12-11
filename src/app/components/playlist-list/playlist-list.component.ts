import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/playlist.model';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  playlistList: Array<Playlist>;

  constructor(
    private movieService: MovieServiceService
  ) { 

    this.playlistList=[]
  }

  ngOnInit(): void {
    //cargar las playlist
    this.getPlaylists();
  }
  //Añadir por nombre
  addPlaylist(name:string){
    let playlist: Playlist = new Playlist(null, name, 'miguel', []); 


    this.movieService.addPlaylist(playlist).subscribe(dataResult =>{
      // Me quedo con el id // Es necesario sino refresco la pagina para hacer el delete
      this.playlistList.push(dataResult);
      console.log(dataResult);
    })
  }



  //Borrado por nombre
  deletePlaylist(name:string){
    this.playlistList.forEach((item,index) => {
      if (item.name==name) {
        this.playlistList.splice(index,1);
      }
    });
    console.log(name);





  }

  getPlaylists(){
    this.movieService.getAllPlaylists().subscribe(dataResult =>{
      this.playlistList=dataResult;
      console.log(dataResult);
    })
  }



}
