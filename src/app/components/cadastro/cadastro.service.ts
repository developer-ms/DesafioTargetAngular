import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
  
  saveCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.urlApi}/Cadastro`, JSON.stringify(cliente), this.httpOptions);
  }

  
}
