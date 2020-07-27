import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';

import { Endereco } from './endereco.model';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() formEndereco: FormGroup;

  constructor() {

   }


  ngOnInit(): void {

  }

}
