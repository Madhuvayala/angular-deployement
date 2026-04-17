import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //RouterOutlet
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('deployement');

  selectedColor = signal('#3498db');

  updateColor(newColor: string) {
    this.selectedColor.set(newColor);
  }
  copyColor(){
    navigator.clipboard.writeText(this.selectedColor());
    alert('Color code copied to clipboard: ' + this.selectedColor());
  }
}
