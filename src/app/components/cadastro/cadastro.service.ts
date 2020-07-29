import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Cliente} from './cliente.model'
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  //Requisição POST - Cadastrar Cliente
  saveCliente(cliente: Cliente){
    return this.http.post(`${environment.urlApi}/Cadastro`, JSON.stringify(cliente), this.httpOptions).subscribe(
      Response => { alert('Cadastro Realizado com Sucesso!'); },
      error => { alert('Não foi possível realizar o cadastro, por favor verifique os dados inseridos!')});
  }

  //Requisição PUT - Atualizar Cliente
  updateCliente(cliente: Cliente){
    return this.http.put(`${environment.urlApi}/Cadastro`, JSON.stringify(cliente), this.httpOptions).subscribe(
      Response => { alert('Cadastro Atualziado com Sucesso!'); },
      error => { alert('Não foi possível atualizar o cadastro, por favor verifique os dados inseridos!')});
  }

  //Requisição DELETE - Deletar Cliente
   deleteCliente(idCliente: number){
     console.log(`${environment.urlApi}/Cadastro/${idCliente}`)
     return this.http.delete(`${environment.urlApi}/Cadastro/${idCliente}`, this.httpOptions).subscribe(
       Response => { alert('Cadastro deletado com Sucesso!'); },
       error => { alert('Não foi possível deletar o cadastro!')});
   }

   //Requisição DELETE - Deletar Endereço Cliente
   deleteEndereco(idCliente: number, idEndereco: number){
    return this.http.delete(`${environment.urlApi}/Cadastro/${idCliente}/${idEndereco}`, this.httpOptions).subscribe(
      Response => { alert('Endereço deletado com Sucesso!'); },
      error => { alert('Não foi possível deletar o endereço!')});
  }

  //Requisição GET - Obter Lista de Clientes
  getClientes(): Observable<Array<Cliente>>{
    
    return this.http.get<Array<Cliente>>(`${environment.urlApi}/Cadastro`)
    
  }



  
}
