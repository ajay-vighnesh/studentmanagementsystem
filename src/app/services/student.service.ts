import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  // studentData: any[] = [];

  constructor() { }

  setValueStudnet(data:any){
    localStorage.setItem(`${data.studentname}`,JSON.stringify(data))
    console.log("success")
  }
  getStudnet(name:string):any{
    let data:string|null =localStorage.getItem(name)
    console.log(localStorage.length);
    
    return data?JSON.parse(data):''
  }
  removeStudent(name:string){
    localStorage.removeItem(name)
  }
}
