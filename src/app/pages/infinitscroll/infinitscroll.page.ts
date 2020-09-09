import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitscroll',
  templateUrl: './infinitscroll.page.html',
  styleUrls: ['./infinitscroll.page.scss'],
})
export class InfinitscrollPage implements OnInit {

  numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  limit = 15;
  constructor() { }

  ngOnInit() {
  }

  popularInfinite(infiniteScrollEvent: any){
    console.log('Carregar mais 10 itens');
    this.limit += 10;
    infiniteScrollEvent.target.complete();
  }
}
