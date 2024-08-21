export interface EstadoVenta{
    idestadoventa: number;
    estado: string;
}


export interface Venta{
    idventa : number;
    fecha : Date;
    descuento : number;
    total: number;
    igv : number;
    estadoVenta : EstadoVenta

}