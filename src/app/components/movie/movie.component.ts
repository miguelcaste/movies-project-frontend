import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { ImdbServiceService } from 'src/app/services/imdb-service.service';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input('index')
  index!: number;

  @Input('movie')
  movie!: Movie;

  selectedValue: string;
  selected = 'option2';

  playlists: any[] = [];

  size=0;

  constructor(
    private imbdService: ImdbServiceService,
    private movieService: MovieServiceService

  ) { 
    this.selectedValue='';
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


  getPlaylists(){
    this.movieService.getAllPlaylists().subscribe(dataResult =>{
      dataResult.forEach((element: { id:any,name:any}) => {
        let playlist = {value: element.id, viewValue: element.name};
        this.playlists.push(playlist);
       })

      //this.playlistList=dataResult;
      console.log(dataResult);
    })
  }

  addPlaylist(playlistId:string,movieId:string, movieTitle:string){
    //alert("The movie "+movieTitle+" has been added to the playlist: "+playlistTitle+".")
    //this.getPlaylists();

    //Get playlistbyid
    this.movieService.getPlaylist(playlistId).subscribe(dataResult =>{
      console.log(dataResult)
      if(dataResult.movieList.length>=10){
        alert("You have reached the limit of 10 movies per playlist");
      }
      else{
        alert("The movie "+movieTitle+" has been added to the playlist "+dataResult.name+".");
    
        //OBTENER MAS INFO
        this.imbdService.obtainMoreInfo(movieId).subscribe(dataResult =>{
          //this.movieList=dataResult;
          console.log(dataResult);
          //console.log(this.movieList);
          //return this.movieList;
    
    
          console.log(dataResult.id);//id
          console.log(dataResult.title);//title
          console.log(dataResult.year);//year
          console.log(dataResult.image);//image
          console.log(dataResult.directors);//director
          console.log(dataResult.stars);//actors
          let movie: Movie = new Movie(dataResult.id, dataResult.title, dataResult.year, dataResult.image, dataResult.directors, dataResult.stars);
          
          this.movieService.addMovieToPlaylist(playlistId,movie).subscribe(dataResult =>{


          })
          
    
    
    
        })
      }
//    for (let index = 0; index < this.playlists.length; index++) {
//      if (this.playlists[index].value==playlistId) {
      //this.size=this.playlists[index].list.length;
      //console.log(this.size)
      //Comprobar que no tiene mas de 10
      //if (this.size>=10) {
      //}
      //else{
        
      //}

    })

      
    }







    


  

}
