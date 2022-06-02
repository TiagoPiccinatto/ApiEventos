import { IEvento } from "./IEvento";
import { IRedeSocial } from "./IRedeSocial";

export interface IPalestrante {
  id: number;
  nome: string;
  miniCurriculo: string;
  imagemURL: string;
  telefone: string;
  email: string;
  redeSociais: IRedeSocial[];
  palestranteEventos: IEvento[];
}
