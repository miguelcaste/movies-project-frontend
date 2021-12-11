import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

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

  playlists: any[] = [
    {value: 'steak-0', viewValue: 'Playlist 1'},
    {value: 'pizza-1', viewValue: 'Playlist 2'},
    {value: 'tacos-2', viewValue: 'Playlist '},
  ];

  constructor() { 
    this.selectedValue='';
  }

  ngOnInit(): void {
  }

}
