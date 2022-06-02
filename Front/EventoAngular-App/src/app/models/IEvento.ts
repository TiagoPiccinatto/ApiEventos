import { ILote } from "./ILote";
import { IPalestrante } from "./IPalestrante";
import { IRedeSocial } from "./IRedeSocial";

export interface IEvento {
  id: number;
  nome: string;
  local: string  ;
  dataEvento?: Date;
  tema: string;
  qtPessoas: number;
  lote: string;
  imagemUrl: string;
  telefone: string;
  email: string;
  lotes: ILote[];
  redeSociais: IRedeSocial[];
  palestranteEventos: IPalestrante[];
}
