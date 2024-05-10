import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readstudent',
  templateUrl: './readstudent.component.html',
  styleUrls: ['./readstudent.component.scss']
})
export class ReadstudentComponent implements OnInit {
 allData : { [key: string]: string } = {}
 a:any[]=[]
  constructor(public service:StudentService, public route:Router){}

  ngOnInit(): void {
   
    this.check()
  
      
  }
  
  
  

  navigate(data:any,index:number){
 this.route.navigate(['/update_student',JSON.stringify([data,index])], {skipLocationChange: true})
  }

  deleteItem(i:any){
    console.log(i)
    this.service.removeStudent(i.studentname)
    this.check()
  }
// }

check(){
  this.a = []

//   let students = [
//     { name: "Alice", registerNumber: "2022001" },
//     { name: "Bob", registerNumber: "2022002" },
//     { name: "Charlie", registerNumber: "2022003" },
//     { name: "David", registerNumber: "2022004" },
//     { name: "Eve", registerNumber: "2022005" }
// ];

// console.log(Object.keys(students));


  for (let i = 0; i < localStorage.length; i++) {
    let key: string | null = localStorage.key(i);
    console.log(localStorage.key(i));
    
    if (key) {
        let value: string | null = JSON.parse(localStorage.getItem(key) || '');
        if (value !== null) { // Check if value is not null
            this.a.push(value); // Handle the possibility of null or undefined value
            console.log(this.a);
        }
    }
}
}

}
