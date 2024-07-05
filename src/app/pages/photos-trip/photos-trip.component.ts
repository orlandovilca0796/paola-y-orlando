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
      photoSrc1: 'assets/photos-trip/trip7.jpg',
      photoSrc2: 'assets/photos-trip/trip11.jpg',
      photoSrc3: 'assets/photos-trip/trip8.jpg'
    },
    // {
    //   photoSrc1: 'assets/photos-trip/trip11.jpg',
    //   photoSrc2: 'assets/photos-trip/trip5.jpg',
    //   photoSrc3: 'assets/photos-trip/trip8.jpg'
    // },
    {
      photoSrc1: 'assets/photos-trip/trip9.jpg',
      photoSrc2: 'assets/photos-trip/trip10.JPG',
      photoSrc3: 'assets/photos-trip/trip12.jpeg'
    }
  ]
}
