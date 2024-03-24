export class Empleado {
    constructor(
        public nombre: string,
        public apellido: string,
        public dni: number,
        public telefono: number,
        public direccion: string,
        public correo: string,
        public id?: number
    ) { }

}
