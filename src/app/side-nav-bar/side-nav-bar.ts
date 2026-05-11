import { Component, inject } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-side-nav-bar',
  imports: [MatSidenavModule,MatToolbarModule,MatIconModule],
  templateUrl: './side-nav-bar.html',
  styleUrl: './side-nav-bar.css',
})
export class SideNavBar {

  constructor() { 
    const basicObservable=new Observable(value=>{
      value.next('hello');
      value.next('hi');
      value.next('welcome');
    });
    basicObservable.subscribe(value=>{
      console.log(value);
    });
  }
subscribe!:Subscription;
shouldRun:boolean=false;
whileClick(){
  console.log('madhu')
  this.shouldRun=!this.shouldRun;
}
http=inject(HttpClient);
ngOnInit(){
  this.getUsers();
}
getUsers(){
  this.subscribe=this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
    console.log(data);
  });
}

}
