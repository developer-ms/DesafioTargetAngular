import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {Cliente} from './cliente.model'


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {



  formCliente: FormGroup;
  formEnderecos: FormArray;

  constructor(private form: FormBuilder) {
    this.formCliente = this.form.group({
      Nome: new FormControl(''),
      DataNascimento: new FormControl(''),
      Enderecos: new FormArray([])
    })

    this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;
    this.formEnderecos.push(this.criarEndereco());

  }


  onSubmit(form: Cliente){
 
    //Inserir lógica que chamará serviço de acesso a API

  };

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

  }

}
