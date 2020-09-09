import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      {id: 1, idade: 13, nome: "Paulo"},
      {id: 2, idade: 31, nome: "José"},
      {id: 3, idade: 13, nome: "Silva"},
      {id: 4, idade: 22, nome: "Léo"},
      {id: 5, idade: 55, nome: "Pedro"},
      {id: 6, idade: 32, nome: "Antonio"},
      {id: 7, idade: 13, nome: "Rogério Ceni"},
      {id: 8, idade: 12, nome: "Andréia"},
      {id: 9, idade: 13, nome: "Souza Soares"},
      {id: 10, idade: 21, nome: "Renan Treze"},
      {id: 11, idade: 60, nome: "Edi Santos"},
      {id: 12, idade: 37, nome: "Divani"},
      {id: 13, idade: 68, nome: "Party"},
      {id: 14, idade: 26, nome: "Gio"},
      {id: 15, idade: 1, nome: "Jussara"},
    ];
    this.pessoasFiltradas = this.pessoas
  }
  ngOnInit() {
  }

  filtrarItens(event){
    this.nome = event.target.value.toLowerCase();

    console.log(this.nome);

    this.pessoasFiltradas = this.filtrarPessoas(this.nome)
  } 
  //Filtro em tempo real
  filtrarPessoas(nome){
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item) =>{
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
