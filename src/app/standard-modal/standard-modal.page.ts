import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-standard-modal',
  templateUrl: './standard-modal.page.html',
  styleUrls: ['./standard-modal.page.scss'],
})
export class StandardModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
