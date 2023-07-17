import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HodRegistrationComponent } from './registration/hod-registration/hod-registration.component';
import { StaffRegistrationComponent } from './registration/staff-registration/staff-registration.component';
import { LeaveApplicationFormComponent } from './leave-application-form/leave-application-form.component';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "registration", component : RegistrationComponent, children : [
    {path : 'staff', component : StaffRegistrationComponent},
    {path : 'hod', component : HodRegistrationComponent}
  ]},
  {path : "leaveApplicationForm", component : LeaveApplicationFormComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
