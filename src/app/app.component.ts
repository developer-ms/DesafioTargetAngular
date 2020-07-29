import { Component, OnInit, OnChanges} from '@angular/core';
import { Cliente } from './components/cadastro/cliente.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cliente: Cliente;
  clientes: Array<Cliente> = new Array<Cliente>();

  constructor(){
      
  }

  ngOnInit(){
    
  }

  clienteSelecionado(cliente: Cliente): void{
    this.cliente = cliente;
  }

  atualizarLista(clientes: Array<Cliente>){
    this.clientes = clientes;
  }

  limparClienteSelecionado(limpar: boolean){
    this.cliente = undefined;
  }
  


}
