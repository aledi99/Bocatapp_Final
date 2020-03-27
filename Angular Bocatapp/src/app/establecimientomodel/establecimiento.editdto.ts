export class EditEstablecimientoDto {
    constructor (
        public nombre : String,
        public descripcion : String,
        public horaApertura : String,
        public horaCierre : String,
        public lat : number,
        public longitud : number,
        public abierto : boolean,
        public nombreCategoria : String
    ) {}

    transformarDto() {
        return {
            nombre: this.nombre,
            descripcion: this.descripcion,
            horaApertura: this.horaApertura,
            horaCierre: this.horaCierre,
            lat: this.lat,
            longitud: this.lat,
            abierto: this.abierto,
            nombreCategoria: this.nombreCategoria
        }
    }
    
}