import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCrtl: ToastController) { }

  ngOnInit() {
  }

  async toastSimples(){
    let toast = await this.toastCrtl.create({
      message: 'Olá mundo',
      duration: 2000
    });

    toast.present();
  }

  async toastOptions(){
    const toast = await this.toastCrtl.create({
      header: 'Cabeçalho',
      message: 'Uma mensagem',
      position: 'top',
      mode: 'md',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  
}
