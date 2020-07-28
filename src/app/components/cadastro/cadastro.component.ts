import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {Cliente} from './cliente.model';
import {CadastroService} from './cadastro.service';
import { Endereco } from '../endereco/endereco.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  @Input() editarCliente: Cliente;

  formCliente: FormGroup;
  formEnderecos: FormArray;

  constructor(private form: FormBuilder, private cadastroService: CadastroService) {

  }


  onSubmit(cliente: Cliente){ 
    if(cliente.Id > 0){

    }
    else{

      var limparCliente = new Cliente();
      limparCliente.Enderecos.push(new Endereco());

      this.cadastroService.saveCliente(cliente).subscribe(
        result => {this.criarFormulario(limparCliente)}, 
        error => {console.log(error)});   
    }
  };

  

  criarFormulario(cliente: Cliente): void{
    if (cliente != undefined) {
      this.formCliente = this.form.group({
        Nome: new FormControl(cliente.Nome),
        DataNascimento: new FormControl(cliente.DataNascimento),
        Enderecos: new FormArray([])
      })
  
      this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;
      cliente.Enderecos.forEach(endereco => {
        this.formEnderecos.push(
          this.form.group({
            Logradouro: [endereco.Logradouro],
            Numero: [endereco.Numero],
            Complemento:[endereco.Complemento],
            Bairro: [endereco.Bairro],
            Cidade: [endereco.Cidade],
            Estado: [endereco.Estado]
          })
        );
      });
    }
    else{
      this.formCliente = this.form.group({
        Nome: new FormControl(''),
        DataNascimento: new FormControl(''),
        Enderecos: new FormArray([])
      })
  
      this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;
      this.formEnderecos.push(this.criarEndereco());
    }
  }


  //Função para inserir novo item do tipo Endereço no formulário dinâmico
  adicionarEndereco(): void{
    this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;
    this.formEnderecos.push(this.criarEndereco());
  }

  //Função para remover novo item do tipo Endereço no formulário dinâmico
  removerEndereco():void{
    if (this.formEnderecos.controls.length > 1) {
      this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;
      this.formEnderecos.removeAt(this.formEnderecos.controls.length - 1);
    }
  }
  
  //Função para criar grupo que será inserido no formulário dinâmico
  criarEndereco(): FormGroup{
     return this.form.group({
      Logradouro: [''],
      Numero: [''],
      Complemento:[''],
      Bairro: [''],
      Cidade: [''],
      Estado: ['']
    })
  }

  ngOnInit(): void {
    this.criarFormulario(this.editarCliente);
  }

}
