import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent implements OnInit {
  cliCpf: string = '';
  cliName: string = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

  }

  save(){
    if (this.cliCpf && this.cliName) {
      this.clienteService.addCliente({ cpf: this.cliCpf, name: this.cliName });
      this.clear();
    }
  }

  clear(){
    this.cliCpf = '';
    this.cliName = '';
  }
}

export interface Cliente {
  cpf: string;
  name: string;
}
