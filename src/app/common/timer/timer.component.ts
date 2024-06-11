import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;

  $source = timer(0, 1000);

  $animation = timer(0,50);

  dateWeeding: any = new Date('08/31/2024 15:00');
  dateNow: any;

  day: any;
  hours: any;
  minutes: any;
  seconds: any;

  ngOnInit(): void {
    this.$source.subscribe(t => {
      this.dateNow = new Date();
      let differenceDates = this.dateWeeding - this.dateNow;
      this.day = Math.floor(differenceDates / this._day);
      this.hours = Math.floor((differenceDates % this._day) / this._hour);
      this.minutes = Math.floor((differenceDates % this._hour) / this._minute);
      this.seconds = Math.floor((differenceDates % this._minute) / this._second);
    });
  }
}
