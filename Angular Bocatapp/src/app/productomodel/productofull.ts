import { ImagenDto } from './imagen';
import { EstablecimientoDto } from './establecimiento';

export interface ProductoDto2 {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    activo: boolean;
    gluten: boolean;
    lactosa: boolean;
    establecimiento: EstablecimientoDto;
    imagen: ImagenDto;
}