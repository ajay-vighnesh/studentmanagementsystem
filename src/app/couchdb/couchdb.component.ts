import { Component } from '@angular/core';
import { CouchService } from '../couch.service';

@Component({
  selector: 'app-couchdb',
  templateUrl: './couchdb.component.html',
  styleUrls: ['./couchdb.component.scss']
})
export class CouchdbComponent {

  constructor(private services:CouchService){

  }
  create(){
    this.services.createtable()
  }
}
