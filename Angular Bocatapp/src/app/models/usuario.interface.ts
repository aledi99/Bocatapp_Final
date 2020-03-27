export class Usuario {
    id:number;
    nombre:string;
    username:string;
    apellidos:string;
    edad:number;
    email:string;
    password:string;
    favoritos: number[];
    localizacion: string;
    avatar: string;
    listPedidos: string[];
    lisRoles:string[];
    fechaCreacion: Date;
    lastPasswordChangedAt: Date;
	
}