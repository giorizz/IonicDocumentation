import { ModalInternoComponent } from './../../components/modal-interno/modal-interno.component';
import { RefreshPageRoutingModule } from './../refresh/refresh-routing.module';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal(){
    let modal = await this.modalCtrl.create({
      component: ModalInternoComponent,
      componentProps: {nome: 'Giovanni'}
    });
    return await modal.present();
  }
}
