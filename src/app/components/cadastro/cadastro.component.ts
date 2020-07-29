import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray} from '@angular/forms';
import {Cliente} from './cliente.model';
import {CadastroService} from './cadastro.service';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  @Input() editarCliente: Cliente;
  @Output() clientes: EventEmitter<Array<Cliente>> = new EventEmitter<Array<Cliente>>();
  @Output() cancelarEdicao = new EventEmitter<Boolean>();

  formCliente: FormGroup;
  formEnderecos: FormArray;

  constructor(private form: FormBuilder, private cadastroService: CadastroService) {
    
  }

  //Função para Chamar Requisição Salvar/Atualizar Cliente
  onSubmit(cliente: Cliente, editar: boolean){ 
     if(!editar){
         this.cadastroService.saveCliente(cliente);
       }
       else{
           this.cadastroService.updateCliente(cliente);
      }
    this.limparFormulario();
  }

  //Função para Chamar Requisição para deletar Endereço do cliente
  deletarEndereco(){
    let idCliente: number;
    let idEndereco: number;

    idCliente = this.formCliente.value.Id;
    idEndereco = this.formEnderecos.value[this.formEnderecos.controls.length -1].Id
   
    this.cadastroService.deleteEndereco(idCliente,idEndereco);

    this.limparFormulario();
  }

  //Função para Chamar Requisição para Obter todos os Clientes
  getClientes(){
    this.cadastroService.getClientes().subscribe((clientes: Array<Cliente>)=>{
      this.clientes.emit(clientes);
    });
  };
  

  //Função para criar formulário dinâmico
  criarFormulario(cliente: Cliente): void{
    if (cliente != undefined) 
    {
      this.formCliente = this.form.group({
                                Id: new FormControl(cliente.id),
                                Nome: new FormControl(cliente.nome),
                                DataNascimento: new FormControl(cliente.dataNascimento.substring(0, 10)),
                                Enderecos: new FormArray([])
      })

      this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;

      cliente.enderecos.forEach(endereco => {
        this.formEnderecos.push(
          this.form.group({
                          Id: [endereco.id],
                          Logradouro: [endereco.logradouro],
                          Numero: [endereco.numero],
                          Complemento:[endereco.complemento],
                          Bairro: [endereco.bairro],
                          Cidade: [endereco.cidade],
                          Estado: [endereco.estado]
          })
        );
      });
    }
    else
    {
      this.formCliente = this.form.group({
                          Id: new FormControl(0),
                          Nome: new FormControl(''),
                          DataNascimento: new FormControl(''),
                          Enderecos: new FormArray([])
      })
  
      this.formEnderecos = this.formCliente.controls.Enderecos as FormArray;
      this.formEnderecos.push(this.criarEndereco());
    }

    this.getClientes();
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
      Id: [0],
      Logradouro: [''],
      Numero: [''],
      Complemento:[''],
      Bairro: [''],
      Cidade: [''],
      Estado: ['']
    })
  }

  //Função para Cancelar Edição
  onCancelarEdicao(){
    this.cancelarEdicao.emit(true);
  }

  //Função para Limpar Formulário
  limparFormulario(){
    this.onCancelarEdicao(); 
    this.getClientes();
    this.cancelarEdicao.emit(false);
  }

  ngOnInit(): void {
    this.getClientes();
    this.criarFormulario(this.editarCliente);
  }

}
