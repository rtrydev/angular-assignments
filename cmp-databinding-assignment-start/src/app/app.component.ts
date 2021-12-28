import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers = [];
  oddNumbers = [];

  onGameTick(numberData: {eventNumber: number}){
    if(numberData.eventNumber % 2 === 1) this.oddNumbers.push(numberData.eventNumber);
    else this.evenNumbers.push(numberData.eventNumber);
  }
}
