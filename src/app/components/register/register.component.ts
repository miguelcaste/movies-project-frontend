import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/model/profile.model';
import { MovieServiceService } from 'src/app/services/movie-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private movieService: MovieServiceService

  ) { }

  ngOnInit(): void {
  }

  hide = true;




  register(user:string,email:string,password:string,passwordConfirmation:string):void{
    console.log(user+" "+email+" "+password+" "+passwordConfirmation)
    if (password==passwordConfirmation) {
      let profile:Profile = new Profile(user,password,email,"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png","");
      this.movieService.addProfile(profile).subscribe(dataResult =>{
        console.log(dataResult);
        alert("User "+dataResult.username+" created successfully");
    
      });
    } else {
      alert("Passwords doesn't match")
    }
  }




}
