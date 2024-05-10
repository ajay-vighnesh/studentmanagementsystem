import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { ReadstudentComponent } from './readstudent/readstudent.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { TeacherloginComponent } from './teacherlogin/teacherlogin.component';
import { CouchdbComponent } from './couchdb/couchdb.component';


@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    HomepageComponent,
    UpdatestudentComponent,
    ReadstudentComponent,
    StudentloginComponent,
    TeacherloginComponent,
    CouchdbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
