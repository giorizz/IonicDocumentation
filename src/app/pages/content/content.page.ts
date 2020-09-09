import { Component, OnInit } from '@angular/core';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logScrollStart(){
    console.log('Iniciou a mexer com scroll')
  }

  logScrollEnd(){
    console.log('Parou de mexer no scroll')
  }

  logScrolling(e){
    console.log(e)
  }

}
