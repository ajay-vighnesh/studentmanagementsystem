import { Component } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent {

  studentName:string = '';
  rollNo:string = '';
  className:string = '';
  password:string = ''
constructor(private service:StudentService,private route:Router){}

  checkLogin(){
    console.log(this.studentName)
    let data=this.service.getStudnet(this.studentName)
    if(Object.keys(data).length>0){
      if(data.password===this.password){
        this.route.navigate(['/view_student'])
      }
      else{
        alert("enter correct password")
      }
    }
    else{
      alert("please enter correct name")
    }
  }

}
