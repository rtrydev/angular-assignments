import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output()
  gameTickEvent = new EventEmitter<{eventNumber: number}>();

  intervalId : ReturnType<typeof setInterval>;
  currentNumber = 1;

  constructor() { }

  ngOnInit(): void {
  }



  startGame() {

    this.intervalId = setInterval(() => {this.gameTickEvent.emit({eventNumber: this.currentNumber++})}, 1000);

  }

  stopGame() {

    clearInterval(this.intervalId);

  }

  

}
