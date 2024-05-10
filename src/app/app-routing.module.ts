import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ReadstudentComponent } from './readstudent/readstudent.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';



const routes: Routes = [
  {path:"student_login",component:StudentloginComponent},
  {path:"teacher_login",component:TeacherloginComponent},
  {path:"add_student",component:AddstudentComponent},
  {path:"view_student",component:ReadstudentComponent},
  {path:"update_student/:data",component:UpdatestudentComponent},
  {path:"home",component:HomepageComponent},
  {path:"",component:HomepageComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
