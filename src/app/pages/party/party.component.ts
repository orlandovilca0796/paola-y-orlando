import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-party',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss']
})
export class PartyComponent {

  // @ViewChild('suggestMusic')
  // suggestMusicModal!: ElementRef;

  @ViewChild('closeModal') closeModal!: ElementRef


  constructor(public firestore: Firestore) {}

  async addSuggest(sugiere: string, name: string, link: string, modal: any) {
    if(sugiere=='' || name=='' || link==''){
      alert('Completa todos los campos');
    }else{
      let suggestRef = collection(this.firestore, 'songSuggestion');
      await addDoc(suggestRef, {
        sugiere: sugiere||'',
        nombreCancion: name||'',
        linkCancion: link||''
      });
      this.closeModal.nativeElement.click();
    }
  }
}
