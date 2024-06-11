import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  photos: any[] = [
    {
      src: '../../../assets/carousel/carousel1.png',
      title: 'XCARET',
      description: 'Yendo a Xcaret'
    },
    {
      src: '../../../assets/carousel/carousel2.png',
      title: '<3',
      description: 'Corazon'
    },
    {
      src: '../../../assets/carousel/carousel3.png'
    },
  ]
}