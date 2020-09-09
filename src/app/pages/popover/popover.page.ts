import { ModalInternoComponent } from './../../components/modal-interno/modal-interno.component';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(public popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async openPopover(ev: any){
    let popover = await this.popoverCtrl.create({
      component: ModalInternoComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
