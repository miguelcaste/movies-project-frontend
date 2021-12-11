import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: Array<Movie>;

  constructor(
    private movieService: MovieServiceService
  ) { 
  this.movieList=[new Movie("61a2e59a2dc2723fd2e58bd8","La naranja mecanica",1990,"google.es","Steven Spielberg","Robin Willians, Brad Pitt")]

  }

  ngOnInit(): void {
    this.getMovies()
  }


  getMovies(): any{
    this.movieService.getAllMovie().subscribe(dataResult =>{
      this.movieList=dataResult;
      console.log(dataResult);
      console.log(this.movieList);
      return this.movieList;
    })
  }

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
