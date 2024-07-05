import { ContratoService } from './../contrato.service';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-contrato-form',
  templateUrl: './contrato-form.component.html',
  styleUrls: ['./contrato-form.component.css']
})
export class ContratoFormComponent implements OnInit {
  numero: number = 0;
  cliente: Cliente | undefined;
  clientes: Cliente[] = [];
  enAtraso: string = '';
  noPrazo: string = '';
  cancelado: string = '';
  pago: string = '';

  constructor(
    private clienteService: ClienteService,
    private contratoService: ContratoService
  ) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

  save() {
    if (this.numero && this.cliente) {
      this.contratoService.addContrato({
        numero: this.numero,
        enAtraso: this.enAtraso,
        noPrazo: this.noPrazo,
        cancelado: this.cancelado,
        pago: this.pago,
        cliente: this.cliente
      });
    } else {
      console.error('Número ou cliente não definido');
    }
  }

  clear() {
    this.numero = 0;
    this.cliente = undefined;
    this.enAtraso = '';
    this.noPrazo = '';
    this.cancelado = '';
    this.pago = '';
  }
}
