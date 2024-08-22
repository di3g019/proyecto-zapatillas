
export interface TipoDocumentoCliente {
  idtipodocumento: number;
  descripciondocumento: string;
}

export interface Cliente {
  idcliente: number;
  username: string;
  password: string;
  nombrecliente: string;
  apellidocliente: string;
  emailcliente: string;
  fechanacimiento: Date;
  activo: boolean;
  tipodocumentocliente: TipoDocumentoCliente;
}
