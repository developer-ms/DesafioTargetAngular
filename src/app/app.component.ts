import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from './components/cadastro/cliente.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cliente: Cliente;

    constructor(){
    
  }

  ngOnInit(){

  }

  clienteSelecionado(cliente: Cliente): void{
    this.cliente = cliente;
  }

  limpar(){
    this.cliente = undefined;
  }

}
