import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from 'src/app/services/movie-service.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private movieService: MovieServiceService

   
    ) { }

    userLogin="";
    isLogged=false;
    imageLogin="";


    loginTxt="Login"

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(){

    this.movieService.getAllProfile().subscribe(dataResult =>{
      dataResult.forEach((element: { username:any,password:any,email:any, image:any, biography:any, logged:any}) => {
        if(element.logged==true){ //El usuario esta registrado
          this.userLogin=element.username;
          this.isLogged=true;
          this.imageLogin=element.image;

        }
      })
    });

  }
}
