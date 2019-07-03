import { Component, OnInit } from '@angular/core';
import { FrequencyTimerService } from '../frequency-timer.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {
  /*
  constructor(
    private timer: FrequencyTimerService
  ) { }
  timePassed: number = 0;
  */
  timePassed: number = 0;
  interval;
  ngOnInit() {
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timePassed == 60) {
        this.timePassed = 0;
      } else {
        this.timePassed++;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  getTimePassed() {
    return this.timePassed;
  }
  /*
  startTimer() {
    window.alert('The timer has started!');
    this.timer.startTimer();
    timePassed = this.timer.getTimePassed();
  }

  getTimePassed() {
    return this.timer.getTimePassed();
  }

  stopTimer() {
    this.timer.pauseTimer();
  }
  */


}
