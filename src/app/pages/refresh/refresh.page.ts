import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  atualizar(event){
    console.log("usuário está atualizando");
    //TODO ACESSO A BANCO
    setTimeout(() => {
      console.log("Lista atualizada")
      event.target.complete();
    }, 2000);
  }

}
