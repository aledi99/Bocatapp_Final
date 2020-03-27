import { Gerente } from './gerente.interface';
import { ProductoDto2 } from '../productomodel/productofull';
import { ProductoResponse } from '../productomodel/producto';
import { ImagenDto } from '../productomodel/imagen';
import { Ubicacion } from './ubicacion.interface';
import { Categoria } from './categoria.interface';

export class EstablecimientoResponse{

    id:number;
    nombre:string;
    descripcion:string;
    presupuesto:number;
    //abierto:boolean;
    horaApertura:string;
    horaCierre:string;
    gerente: Gerente;
    //listProductos: ProductoDto2;
    //localizacion: Ubicacion;
    //categoria: Categoria;
    latitud: string;
    longitud: string;
    //imagen: ImagenDto;


    
}