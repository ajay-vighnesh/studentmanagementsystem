import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CouchService {

  readonly base_url:string = "https://192.168.57.185:5984/test_product" ;
  readonly user_name:string = "d_couchdb";
  readonly password:string = "Welcome#2";

  constructor(private http:HttpClient) { }

  getHeader():HttpHeaders{
    return new HttpHeaders({
    'Authorization':'Basic' + btoa(`${this.user_name}:${this.password}`)
    });
  }

  createtable(){
    this.http.post(this.base_url,this.getBody(),{headers:this.getHeader()}).subscribe(res => {
      console.log(res);
      
    })
  }

  getUuid():string {
    const uuid = uuidv4();
    console.log(uuid);
    
    return uuid
  }

  getBody(){
    const id = this.getUuid()
    let body = {
      "id" : id,
      "data" : {
        "name" : "ajay"
      }
    }
    return body    
  }

  getDoc(){
    
  }

}
