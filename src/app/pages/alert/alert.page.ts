import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async alert(){
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      subHeader: 'Subtitle',
      message: 'Você apertou num botão',
      buttons: ['OK']
    });
    alert.present();
  }

  async multiple(){
    const alert = await this.alertCtrl.create({
      header: 'Atenção',
      subHeader: 'Subtitle',
      message: 'Opções p cancelar',
      buttons: ['OK', 'Cancel', 'Melhor deixa']
    });
    alert.present();
  }

  async confirm(){
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async prompt(){
    const alert = await this.alertCtrl.create({
      inputs: [
        {
          name: 'Email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          name: 'Senha',
          type: 'password',
          placeholder: 'Senha'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (form) => {
            console.log(form);
          }
        }
      ]
    });
    await alert.present()
  }
}

