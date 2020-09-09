import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {

  notificacoes: number = 10
  dinamico :number = 300
  constructor() { }

  ngOnInit() {
  }

}
