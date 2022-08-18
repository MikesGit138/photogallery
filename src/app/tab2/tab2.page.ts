import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public photoservice: PhotoService) {}

  addPhotoToGallery(){
    this.photoservice.addToGallery()
  }

  async ngOnInit(){
    await this.photoservice.loadSaved()
  }
}
