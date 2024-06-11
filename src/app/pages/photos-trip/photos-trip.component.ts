import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos-trip',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  templateUrl: './photos-trip.component.html',
  styleUrls: ['./photos-trip.component.scss']
})
export class PhotosTripComponent {

  photosTrip: any[] = [
    {
      // photoSrc1: '../../../assets/photos-trip/trip1.jpg',
      // photoSrc2: '../../../assets/photos-trip/trip2.jpg',
      // photoSrc3: '../../../assets/photos-trip/trip3.jpg'
      photoSrc1: 'assets/photos-trip/trip1.jpg',
      photoSrc2: 'assets/photos-trip/trip2.jpg',
      photoSrc3: 'assets/photos-trip/trip3.jpg'
    },
    {
      // photoSrc1: '../../../assets/photos-trip/trip4.jpg',
      // photoSrc2: '../../../assets/photos-trip/trip5.jpg',
      // photoSrc3: '../../../assets/photos-trip/trip6.jpg'
      photoSrc1: 'assets/photos-trip/trip4.jpg',
      photoSrc2: 'assets/photos-trip/trip5.jpg',
      photoSrc3: 'assets/photos-trip/trip6.jpg'
    }
  ]
}
