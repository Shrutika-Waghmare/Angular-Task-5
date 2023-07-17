import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHandlerService } from 'src/app/shared/service/login-http-handler.service';

@Component({
  selector: 'app-hod-registration',
  templateUrl: './hod-registration.component.html',
  styleUrls: ['./hod-registration.component.css']
})
export class HodRegistrationComponent implements OnInit {
  hodFormObj : FormGroup | any;
  hodRegistrationArray : any[] = [];

  constructor(private httpServe : HttpHandlerService){}
  ngOnInit(): void {
    this.hodFormObj = new FormGroup({
      position : new FormControl(''),
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      email : new FormControl('', Validators.required),
      contact : new FormControl('', Validators.required),
      department : new FormControl('', Validators.required),
      userName : new FormControl('', Validators.required),
      password : new FormControl('', Validators.required),
    })
  }

  onSubmit(){
    console.log(this.hodFormObj.value);
    this.hodRegistrationArray.push(this.hodFormObj.value);
    console.log(this.hodRegistrationArray);
    this.httpServe.registerNewHodUser(this.hodFormObj.value).subscribe((regisData : any)=>{
      console.log("regis ", regisData)
    })
    this.httpServe.postUser(this.hodFormObj.value).subscribe((data : any)=>{
      console.log(data.value)
    })
    this.hodFormObj.reset();
  }
}
