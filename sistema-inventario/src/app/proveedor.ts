

export class Proveedor {
    constructor(
        public ruc: string,
        public razon_social: string,
        public direccion: string,
        public telefono: string,
        public correo: string,
        public contacto: string,
        public fecha_registro: string,
        public id?: number,
        
    ) { }

}
