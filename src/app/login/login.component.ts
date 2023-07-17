import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from '../shared/service/login-http-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginFormObj : FormGroup | any;
  loginArrayObj : any;
  dataArray : any[] = [];
  position = "hod";

  constructor(private httpServe : HttpHandlerService, private router : Router){}

  ngOnInit(): void {
    this.loginFormObj = new FormGroup({
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required)
    })
  }

  onSubmit(){
    console.log(this.loginFormObj.value);
    // this.httpServe.loginUser(this.loginFormObj.value).subscribe((regisData : any)=>{
    //   this.loginArrayObj = regisData;
    //   console.log(this.loginArrayObj)
    // })
    this.httpServe.getUsers().subscribe((responseData : any)=>{
      this.dataArray = responseData
      console.log(this.dataArray)
    })
    // if(this.loginArrayObj.userName === this.dataArray.forEach(ele=>{ele.userName})){

    // }
    console.log(this.loginArrayObj)
    this.router.navigate(['/registration']);
    this.loginFormObj.reset();
  }
}
