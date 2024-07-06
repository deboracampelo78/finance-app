import { MatTable } from '@angular/material/table';
import { Contrato } from '../models/contrato.model';
import { ContratoService } from './../contrato.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contrato-list-grid',
  templateUrl: './contrato-list-grid.component.html',
  styleUrl: './contrato-list-grid.component.css'
})
export class ContratoListGridComponent implements OnInit {

  @ViewChild(MatTable) datatable: MatTable<any> | undefined;

  contratos: Contrato[] = []
  contColumns: string[] = [ "numero", "enAtrazo", "noPrazo", "cancelado", "pago", "cliente" ]

  constructor(private contratoService: ContratoService) { }

  ngOnInit() {
    this.contratos = this.contratoService.getContratos();
    this.contratoService.onNewContrato.subscribe((c)=> this.datatable?.renderRows());
  }

}
