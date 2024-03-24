export class Compra {
    constructor(
        public n_factura: string,
        public cantidad: number,
        public precio: number,
        public total: number,
        public fecha_registro: string,
        public id?: number,
        
    ) { }

}
