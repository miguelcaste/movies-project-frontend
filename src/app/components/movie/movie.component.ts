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

  constructor(
    private imbdService: ImdbServiceService,
    private movieService: MovieServiceService

  ) { 
    this.selectedValue='';
  }

  ngOnInit(): void {
    //cargar las playlist
    this.getPlaylists();
  }


  getPlaylists(){
    this.movieService.getAllPlaylists().subscribe(dataResult =>{
      dataResult.forEach((element: { name:any}) => {
        let playlist = {value: element.name, viewValue: element.name};
        this.playlists.push(playlist);
       })

      //this.playlistList=dataResult;
      console.log(dataResult);
    })
  }

  addPlaylist(playlistTitle:string,movieId:string, movieTitle:string){
    //alert("The movie "+movieTitle+" has been added to the playlist: "+playlistTitle+".")
    console.log("The movie "+movieTitle+" has been added to the playlist: "+playlistTitle+".");
    console.log("ID: "+movieId)

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
      
      // POST MOVIE

      // POST PLAYLIST CON MOVIE ID

      //this.movieList=[];
      //dataResult['results'].forEach((element: { id:any, title: any; description:any,image:any}) => {
      //let movie: Movie = new Movie(element.id, element.title, element.description, element.image, "N/A", "N/A"); 
      
      
      //this.movieList.push(movie);

    })

  }

}
