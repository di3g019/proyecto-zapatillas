export interface Cliente{
    idcliente: number

}

export interface DireccionDespacho{
    iddirecciondespacho:number
}


export interface Despacho{
      iddespacho: number;
    fechadespacho: Date;
    estadodespacho: string;
    cliente: Cliente; // Incluye cliente en el DTO
    direccionDespacho: DireccionDespacho;
}