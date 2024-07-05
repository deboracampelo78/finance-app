import { Cliente } from "./cliente.model";

export interface Contrato {
    numero: number;
    enAtraso: string;
    noPrazo: string;
    cancelado: string;
    pago: string;
    cliente: Cliente
}