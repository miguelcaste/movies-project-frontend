import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';
import { ImdbServiceService } from 'src/app/services/imdb-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  searchTitle:string;
  movieList: Array<Movie>;

  constructor(private imbdService: ImdbServiceService) { 
    this.searchTitle='';
    this.movieList=[]

  }

  ngOnInit(): void {
  }


  search(title:string){
    console.log("SEARCH "+title);

      this.imbdService.search(title).subscribe(dataResult =>{

      this.movieList=[];
      dataResult['results'].forEach((element: { id:any, title: any; description:any,image:any}) => {
      let movie: Movie = new Movie(element.id, element.title, element.description, element.image, "N/A", "N/A"); 
      this.movieList.push(movie);
     });


      //console.log(dataResult['results']);
      console.log(dataResult);
      //return this.movieList;
    })
  }


  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

}
