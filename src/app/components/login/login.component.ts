import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor() {
    this.email='';
    this.password='';
  }

  ngOnInit(): void {
  }

  hide = true;


  login(user:string, password:string):void {
    console.log(user);
    console.log(password);





  }

  

}
