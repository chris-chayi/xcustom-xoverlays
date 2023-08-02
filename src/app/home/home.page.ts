import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonRouterOutlet, ModalController, PopoverController } from '@ionic/angular';
import { alertEnterAnimation } from '../animations/alert-animation';
import { modalEnterAnimation } from '../animations/modal-animation';
import { MyModalPage } from '../my-modal/my-modal.page';
import { MyPopoverPage } from '../my-popover/my-popover.page';
import { StandardModalPage } from '../standard-modal/standard-modal.page';
import { alertLeaveAnimation } from '../animations/alert-leave-animation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController,
    private popoverCtrl: PopoverController, private routerOutlet: IonRouterOutlet,
    private alertController: AlertController, private actionSheetController: ActionSheetController) { }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: StandardModalPage,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();
  }

  async openTransparentModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'transparent-modal',
      presentingElement: document.getElementById('#hi')
    });

    await modal.present();
  }

  async openBlurredModal() {
    const modal = await this.modalCtrl.create({
      component: MyModalPage,
      cssClass: 'blurred-modal'
    });

    await modal.present();
  }

  async openPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: MyPopoverPage,
      event: ev,
      cssClass: 'custom-popover'
    });

    await popover.present();
  }

  async openAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
        }
      }]
    });

    await actionSheet.present();
  }

  async openModalAnimated() {
    const modal = await this.modalCtrl.create({
      component: StandardModalPage,
      enterAnimation: modalEnterAnimation
    });

    await modal.present();
  }

  async openAlertAnimated() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK'],
      enterAnimation: alertEnterAnimation,
      leaveAnimation: alertLeaveAnimation
    });

    await alert.present();
  }

}
