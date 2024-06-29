import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { TimerComponent } from './common/timer/timer.component';
import { PlacesComponent } from './common/places/places.component';
import { PhotosTripComponent } from './pages/photos-trip/photos-trip.component';
import { PartyComponent } from './pages/party/party.component';
import { GiftComponent } from './pages/gift/gift.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { FooterComponent } from './pages/footer/footer.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../environment/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarouselComponent,
    TimerComponent,
    PlacesComponent,
    PhotosTripComponent,
    PartyComponent,
    GiftComponent,
    ConfirmationComponent,
    FooterComponent,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
