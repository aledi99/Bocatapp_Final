import { UbicacionDto } from './ubicaciondto';
import { GerenteDto2 } from './gerentedto2';
import { CategoriaDto } from './categoriadto';
import { ImagenDto } from '../productomodel/imagen';

export interface EstablecimientoDto2 {
    id : number,
    nombre : String,
    descripcion : String,
    presupuesto : number,
    abierto : boolean,
    valoracion : number,
    imagen : ImagenDto,
    localizacion : UbicacionDto,
    horaApertura : String,
    horaCierre : String,
    gerente : GerenteDto2,
    categoria : CategoriaDto

}