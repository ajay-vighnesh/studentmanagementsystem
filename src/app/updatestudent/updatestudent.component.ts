import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.scss']
})

export class UpdatestudentComponent implements OnInit{
name:string=''
  updatestudentForm! : FormGroup
  paramdatas: any[] = [];

constructor(public fb:FormBuilder , public service:StudentService,private Route:ActivatedRoute, public router:Router) {
 
}

onSubmit(){
  this.service.setValueStudnet(this.updatestudentForm.value);
  
  this.updatestudentForm.reset();
  this.router.navigateByUrl('/view_student');
  alert('Update done success')

}

ngOnInit(): void {
  this.Route.params.subscribe(param =>{
    let val=JSON.parse(param['data']);
    console.log(param);
    
    this.name = val[0].studentname
    this.updatestudentForm = this.fb.group({
      studentname:val[0].studentname,
      rollno : val[0].rollno,
      classname : val[0].classname
    })
    this.service.removeStudent(this.name)

    
    
    // this.updatestudentForm.patchValue(this.paramdatas[0])
    
// this.updatestudentForm.patchValue()    
  })
}
}
