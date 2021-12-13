import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input('index')
  index!: number;

  @Input('movie')
  movieId!: string;

  movie:Movie;

  constructor(
    private movieService: MovieServiceService
  ) { 
    this.movie=new Movie('','',0,'','','');
  }

  ngOnInit(): void {
    this.getMovie(this.movieId);
  }

  getMovie(movieId:string){
    this.movieService.getMovie(movieId).subscribe(dataResult =>{
    this.movie=dataResult;
    })
  }

}
