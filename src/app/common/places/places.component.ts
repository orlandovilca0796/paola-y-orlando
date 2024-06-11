import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent {

  openMapCeremonia() {
    window.open('https://maps.app.goo.gl/1nhkSBHf6maNkDxp7', '_blank');
  }

  openMapCelebracion() {
    window.open('https://maps.app.goo.gl/N4kpyuXiesAQQGDs7', '_blank');
  }
}
