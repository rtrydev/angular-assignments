import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretPasswordVisible = false;
  clickTimes: string[] = [];
  clickCount = 0;

  togglePasswordVisibility() {
    this.secretPasswordVisible = !this.secretPasswordVisible;
    this.clickTimes.push(Date());
    this.clickCount++;
  }

  getBackgroundColor(i: number) {
    return i > 3 ? 'blue' : 'white';
  }
}
