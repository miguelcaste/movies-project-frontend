import { Component, OnInit } from '@angular/core';

import { Profile } from 'src/app/model/profile.model';
import { MovieServiceService } from 'src/app/services/movie-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;




  constructor(
    private movieService: MovieServiceService
  ) {
    this.email='';
    this.password='';



  }

  ngOnInit(): void {
    this.checkLogin();
  }

  hide = true;

  userLogin="";
  isLogged=false;


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

  login(user:string, password:string):void {
    console.log(user);
    console.log(password);

    let flag=false;

    this.movieService.getAllProfile().subscribe(dataResult =>{
      //console.log(dataResult);

      dataResult.forEach((element: { username:any,password:any,email:any, image:any, biography:any, logged:any}) => {
        console.log(element);
        if(element.username==user){
          flag=true;
          if(element.password==password){
            alert("Password is correct.");

            let profile: Profile = new Profile(element.username, element.password, element.email, element.image, element.biography, true);

            this.movieService.updateProfile(element.username,profile).subscribe(dataResult =>{
              console.log(dataResult);
              this.checkLogin();
            });

          }
          else{
            alert("Password is incorrect.");
          }
        }
       })
       if (flag==false) {
        alert("User doesn't exists.");
       }

//      alert("User "+dataResult.username+" created successfully");
      // if (password==passwordConfirmation) {
      //   let profile:Profile = new Profile(user,password,email,"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png","",false);
        
      // } else {
      //   alert("Passwords doesn't match")
      // }
    });





  }

  logout(){

    this.movieService.getProfile(this.userLogin).subscribe(dataResult =>{


      let profile: Profile = new Profile(dataResult.username, dataResult.password, dataResult.email, dataResult.image, dataResult.biography, false);

      
      this.movieService.updateProfile(this.userLogin,profile).subscribe(dataResult =>{
        console.log(dataResult);
        this.checkLogin();
      });
    })






  }

  

}
