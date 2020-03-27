import { Usuario } from './usuario.interface';
import { EstablecimientoDto } from '../productomodel/establecimiento';

export class Gerente extends Usuario{

    idGerente : number;
    validado: boolean;
    tlfContacto: string;
    establecimient: EstablecimientoDto;

}