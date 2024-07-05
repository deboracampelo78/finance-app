import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-contrato-form',
  templateUrl: './contrato-form.component.html',
  styleUrl: './contrato-form.component.css'
})
export class ContratoFormComponent implements OnInit {

  emAtraso: string | undefined;
  noPrazo: string | undefined;
  cancelado: string | undefined;
  pago: string | undefined;
  cliente: Cliente | undefined
  
  constructor() { }

  ngOnInit() {

  }

  save(){

  }
  clear(){
    
  }

}
