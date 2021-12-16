import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile.model';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private movieService: MovieServiceService

  ) { }

  userLogin="";
  isLogged=false;

  password="";
  email="";
  image="";
  biography="";

  ngOnInit(): void {
    this.checkLogin();
  }

  hide = true;


    checkLogin(){

    this.movieService.getAllProfile().subscribe(dataResult =>{
      dataResult.forEach((element: { username:any,password:any,email:any, image:any, biography:any, logged:any}) => {
        if(element.logged==true){ //El usuario esta registrado
          this.userLogin=element.username;
          this.isLogged=true;
          this.image=element.image;
          this.password=element.password;
          this.email=element.email;
          this.biography=element.biography;
        }
      })
    });

  }


  updateProfile(user:string,email:string,password:string,passwordConfirmation:string,image:string,biography:any){

    if (password==passwordConfirmation) {
      let profile:Profile = new Profile(user,password,email,image,biography,true);
      // this.movieService.addProfile(profile).subscribe(dataResult =>{
      //   console.log(dataResult);
      //   alert("User "+dataResult.username+" created successfully");
    
      // });

        
        this.movieService.updateProfile(this.userLogin,profile).subscribe(dataResult =>{
          //alert("User "+dataResult.username+" updated successfully");

          console.log(dataResult);
          this.checkLogin();
        });


    } else {
      alert("Passwords doesn't match")
    }



  }

}
