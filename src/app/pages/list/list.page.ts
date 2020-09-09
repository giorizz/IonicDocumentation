import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  frutas = ['Abacaxi', 'Limão', 'Abacate', 'Morango']
  constructor() { }

  ngOnInit() {
  }
}
