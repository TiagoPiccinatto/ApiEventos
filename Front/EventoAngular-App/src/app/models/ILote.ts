import { IEvento } from "./IEvento";

export interface ILote {
 id: number;
 name: string;
 preco: number;
 dataInicio?: Date;
 dataFim?: Date;
 quantidade: number;
 eventoId: number;
 evento: IEvento; //EventoModel
}
