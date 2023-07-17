import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '../shared/service/leave-application-form.service';
import { LeaveForm } from '../shared/model/leave-application-form.model';

@Component({
  selector: 'app-leave-application-form',
  templateUrl: './leave-application-form.component.html',
  styleUrls: ['./leave-application-form.component.css']
})
export class LeaveApplicationFormComponent implements OnInit{
  leaveAppFormObj : FormGroup | any;
  constructor(private leaveServe : LeaveService){}
  ngOnInit(): void {
    this.leaveAppFormObj = new FormGroup({
      startDate : new FormControl('', Validators.required),
      endDate : new FormControl('',Validators.required),
      reason : new FormControl('',Validators.required)
    })
  }
  onSubmit(){
    let leave = this.leaveAppFormObj.value;
    let leaveFormObj = new LeaveForm(leave.startDate, leave.endDate, leave.reason);
    console.log(leave);
    this.leaveServe.addLeaveList(leaveFormObj);
    this.leaveAppFormObj.reset();
  }
}
