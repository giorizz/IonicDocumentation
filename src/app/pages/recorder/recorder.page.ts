import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recorder',
  templateUrl: './recorder.page.html',
  styleUrls: ['./recorder.page.scss'],
})
export class RecorderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: any){
    console.log('arrastando o', ev.detail.from, 'para', ev.detail.to);
    ev.detail.complete();
  }

}
