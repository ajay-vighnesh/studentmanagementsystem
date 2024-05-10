import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.scss']
})
export class AddstudentComponent implements OnInit {
  items:string[] = [];
  StudentName:string = '';

  name = 'john doe';
  todaysDate = new Date();
  cost = 2000;
  temperature = 25.3;

  studentForm!: FormGroup;


  constructor(public fb:FormBuilder, public service:StudentService) {
// localStorage.clear()
    this.studentForm = this.fb.group({
      studentname :[ '',[Validators.pattern(/^[a-zA-Z\s]+$/),Validators.required]],
      rollno : ['',[Validators.pattern(/^[0-9\s]+$/),Validators.required]],
      classname: ['', [Validators.pattern(/^(?:[1-9]|1[0-2])$/),Validators.required]],
      // password:['',[Validators.pattern(/^[a-zA-Z0-9\s]+$/),Validators.required]]
      password:['',[Validators.pattern(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-\s]+$/),Validators.required]]
    })

  }
  ngOnInit() {
   
    console.log(localStorage.length);
    
  }

  onSubmit(){

    this.service.setValueStudnet(this.studentForm.value)
    console.log(this.service.getStudnet(this.studentForm.value.studentname))
    // this.service.studentData.push(this.studentForm.value)
    // console.log(this.service.studentData);
    // this.studentForm.reset();
  }

    

}
