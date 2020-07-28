import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cadastro/cliente.model';
import { Endereco } from '../endereco/endereco.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Output() clienteSelecionado = new EventEmitter();
  
  clientes: Array<Cliente> = new Array<Cliente>();

  constructor() { 
    var enderecos = new Array<Endereco>();
    var enderecos2 = new Array<Endereco>();

    var endereco = new Endereco();
    var endereco2 = new Endereco();


    endereco.Id = 1;
    endereco.Logradouro = 'Rua Conquista';
    endereco.Numero = 368;
    endereco.Complemento = '';
    endereco.Bairro = 'Cidade Jardim';
    endereco.Cidade = 'Sorocaba';
    endereco.Estado = 'SP';

    endereco2.Id = 2;
    endereco2.Logradouro = 'Alameda das Asaleas';
    endereco2.Numero = 535;
    endereco2.Complemento = '';
    endereco2.Bairro = 'Jardim Simus';
    endereco2.Cidade = 'São Paulo';
    endereco2.Estado = 'SP';


    enderecos.push(endereco);
    enderecos.push(endereco2);
    
    enderecos2.push(endereco2);

    var cliente1 = new Cliente();
    cliente1.Id = 1
    cliente1.Nome = 'Paulo Almeida'
    cliente1.DataNascimento = "1992-02-04";
    cliente1.Enderecos = enderecos;

    var cliente2 = new Cliente();
    cliente2.Id = 2
    cliente2.Nome = 'Ana Paula'
    cliente2.DataNascimento = "1993-08-08";
    cliente2.Enderecos = enderecos2;

    this.clientes.push(cliente1);
    this.clientes.push(cliente2);

  }

  ngOnInit(): void {
  
  }

  editar(cliente: Cliente){
    this.clienteSelecionado.emit(cliente);
  }

}
