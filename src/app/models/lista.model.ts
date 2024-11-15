import { ListaItem } from "./lista-item.model";


export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminada: boolean;
    terminadaEn: Date | null;
    items: ListaItem[];

    constructor( titulo: string ){
        this.titulo = titulo;

        this.creadaEn = new Date();
        this.terminada = false;
        this.terminadaEn = new Date();
        this.items = [];

        this.id = new Date().getTime();
    }

}