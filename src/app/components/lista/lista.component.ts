import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Cliente } from '../cadastro/cliente.model';
import { CadastroService } from '../cadastro/cadastro.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnChanges {

  @Output() clienteSelecionado = new EventEmitter();
  @Input() clientes: Array<Cliente> = new Array<Cliente>();


  ngOnChanges(changes: SimpleChanges) {
    this.getClientes();
  }
 

  constructor(private cadastroService: CadastroService) { 
  }

  ngOnInit(): void {
  }

  //Função para enviar Cliente Selecionado para Edição
  editar(cliente: Cliente){
    this.clienteSelecionado.emit(cliente);
  }

  //Função para Chamar Requisição para Deletar Cliente
  deletarCliente(idCliente: number){   
    this.cadastroService.deleteCliente(idCliente);
    this.getClientes();
  }

  //Função para Chamar Requisição para Obter todos os Clientes
  getClientes(){
    this.cadastroService.getClientes()
                        .subscribe((clientes: Array<Cliente>)=>{
                                    this.clientes = clientes;}
                                  );
  }

}
