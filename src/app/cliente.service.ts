import { Injectable } from '@angular/core';
import { Cliente } from './models/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private clientes: Cliente[] = [
    {cpf:'270430038-08', name: "Debora"},
    {cpf:'054745269-11', name: "Drieli"},
    {cpf:'370430038-19', name: "Sônia"},
    {cpf:'289563045-12', name: "José"}
  ];

  constructor() { }

  getClientes(): Cliente[] {
    return this.clientes;
  }

  addCliente(c: Cliente) {
    this.clientes.push(c);
    console.log("Cliente Adicionado com Sucesso!: ", this.clientes);
  }

  getClienteById(cpf: string): Cliente | undefined {
    return this.clientes.find((c) => c.cpf === cpf);
  }
}
