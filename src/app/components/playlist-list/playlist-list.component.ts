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
  userLogin="";
  isLogged=false;

  ngOnInit(): void {
    //cargar las playlist
    this.checkLogin();
    this.getPlaylists();
  }

  checkLogin(){

    this.movieService.getAllProfile().subscribe(dataResult =>{
      dataResult.forEach((element: { username:any,password:any,email:any, image:any, biography:any, logged:any}) => {
        if(element.logged==true){ //El usuario esta registrado
          this.userLogin=element.username;
          this.isLogged=true;
        }
      })
    });

  }

  //Añadir por nombre
  addPlaylist(name:string){
    let playlist: Playlist = new Playlist(null, name, this.userLogin, []); 


    this.movieService.addPlaylist(playlist).subscribe(dataResult =>{
      // Me quedo con el id // Es necesario sino refresco la pagina para hacer el delete
      this.playlistList.push(dataResult);
      console.log(dataResult);
    })
  }



  //Borrado por nombre
  deletePlaylist(id:string|null){
    this.playlistList.forEach((item,index) => {
      if (item.id==id) {


        this.movieService.deletePlaylist(id).subscribe(dataResult =>{
          // Me quedo con el id // Es necesario sino refresco la pagina para hacer el delete

        })



        this.playlistList.splice(index,1);
      }
    });

  }

  getPlaylists(){
    this.movieService.getAllPlaylists().subscribe(dataResult =>{
      this.playlistList=dataResult;
      console.log(dataResult);
    })
  }

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }


}
