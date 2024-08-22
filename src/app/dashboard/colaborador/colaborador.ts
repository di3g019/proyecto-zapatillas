export interface TipoDocumentoColaborador {
    iddocumento: number;
    nombredocumento: string;
  }

export interface Colaborador {
    idcolaborador: number;
    username: string;
    password: string;
    nombres: string;
    apellidos: string;
    correo: string;
    fechaingreso: Date;
    activo: boolean;
    tipoDocumentoColaborador: TipoDocumentoColaborador;
  }
