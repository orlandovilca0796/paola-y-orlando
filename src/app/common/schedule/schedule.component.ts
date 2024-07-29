import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  openMapCeremonia() {
    window.open('https://maps.app.goo.gl/1nhkSBHf6maNkDxp7', '_blank');
  }

  openMapCelebracion() {
    window.open('https://maps.app.goo.gl/N4kpyuXiesAQQGDs7', '_blank');
  }
}
