import { ClienteService } from './cliente.service';
import { Cliente } from './models/cliente.model';
import { Injectable } from '@angular/core';
import { Contrato } from './models/contrato.model';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private dataFromServer: any[]= [
    {numero: 1, enAtraso: "não", noPrazo: 'sim', cancelado: 'não', pago: 'não', cliente_cpf: '270430038-08'},
    {numero: 2, enAtraso: "não", noPrazo: 'sim', cancelado: 'não', pago: 'não', cliente_cpf: '054745269-11'},
    {numero: 3, enAtraso: "não", noPrazo: 'sim', cancelado: 'não', pago: 'não', cliente_cpf: '370430038-19'},
    {numero: 4, enAtraso: "não", noPrazo: 'sim', cancelado: 'não', pago: 'não', cliente_cpf: '289563045-12'},
  ]

  private contratos: Contrato[] = [];

  constructor(
    private clienteService: ClienteService) { 

    for (let c of this.dataFromServer) {
      const cliente = this.clienteService.getClienteById(c.cliente_cpf);
      if (cliente) {
        this.contratos.push({
          numero: c.numero,
          enAtraso: c.enAtraso,
          noPrazo: c.noPrazo,
          cancelado: c.cancelado,
          pago: c.pago,
          cliente: cliente
        });
      } else {
        // Tratar caso cliente não seja encontrado, ex: ignorar ou lançar erro
        console.warn(`Cliente com CPF ${c.cliente_cpf} não encontrado.`);
      }
    }

  }

  getContratos(): Contrato[] {
    return this.contratos;
  }

  addContrato(contrato: Contrato) {
    this.contratos.push(contrato);
    console.log("Contrato Adicionado com Sucesso!: ",this.contratos);
  }

}
