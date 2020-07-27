import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cadastro/cliente.model';
import { Endereco } from '../endereco/endereco.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  clientes: Array<Cliente>;


  constructor() { 


  }
  ngOnInit(): void {
    this.clientes = new Array<Cliente>();

    var enderecos = new Array<Endereco>();
    var endereco = new Endereco();

    endereco.Id = 1;
    endereco.Logradouro = 'Rua Conquista';
    endereco.Numero = 368;
    endereco.Complemento = '';
    endereco.Bairro = 'Cidade Jardim';
    endereco.Cidade = 'Sorocaba';
    endereco.Estado = 'SP';

    enderecos.push(endereco);

    var cliente1 = new Cliente();
    cliente1.Id = 1
    cliente1.Nome = 'Paulo Almeida'
    cliente1.DataNascimento = new Date(1992,2,4);
    cliente1.Enderecos = enderecos;

    this.clientes.push(cliente1);

    console.log(this.clientes);
    console.log(this.clientes[0].Enderecos[0].Logradouro);
  }

}
