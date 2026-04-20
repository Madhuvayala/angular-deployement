import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forkJoin, of } from 'rxjs';
import { Sidebar } from './core/layout/sidebar/sidebar';
import { Navbar } from './core/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // dataUsers=of(([
  //   { id: 1, name: 'Alice' },
  //   { id: 2, name: 'Bob' },
  //   { id: 3, name: 'Charlie' }
  // ]));
  // dataUserss=of(([
  //   { id: 1, name: 'Alice' },
  //   { id: 2, name: 'Bob' },
  //   { id: 3, name: 'Charlie' }
  // ]));
  // constructor() {
  //   forkJoin([this.dataUsers, this.dataUserss]).subscribe(([users1, users2]) => {
  //     debugger;
  //     console.log('Users from dataUsers:', users1);
  //     console.log('Users from dataUserss:', users2);
  //   }
  //   );
  //   this.dataUsers.subscribe(users => {
  //     console.log('Users from dataUsers:', users);
  //   });
  //   this.dataUserss.subscribe(users => {
  //     console.log('Users from dataUserss:', users);
  //   });
  // }
  // selectedColor = signal('#3498db');

  // updateColor(newColor: string) {
  //   this.selectedColor.set(newColor);
  // }
  // copyColor(){
  //   navigator.clipboard.writeText(this.selectedColor());
  //   alert('Color code copied to clipboard: ' + this.selectedColor());
  // }
}
