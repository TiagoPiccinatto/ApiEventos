import { Component, OnInit } from '@angular/core';
import { IEvento } from '../models/IEvento';
import { EventoService } from '../services/evento.service';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public filtrarEventos(filtrarPor: string): IEvento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: {tema:string, local:string, id:number}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
         evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || evento.id.toString().indexOf(filtrarPor) !== -1
    )
  }
  ngIf="exibirimagem";
  exibirimagem = false;
  public eventos: IEvento[] = [];
  public eventosfiltrados: IEvento[] = [];

  tamanhoimg: number = 150;
  tamanhomargin = 2;
  private _filtrolista: string = "";

  public get filtrolista(): string {
    return this._filtrolista;
  }


  public set filtrolista(value: string){
    this._filtrolista = value;
    this.eventosfiltrados = this.filtrolista ? this.filtrarEventos(this.filtrolista) : this.eventos;
  }


  constructor(private eventoService: EventoService) { }

  public ngOnInit(): void {
    this.getEvento();
  }

  public getEvento(): void {
    this.eventoService.getEvento().subscribe(
      response => {
        this.eventos = response,
        this.eventosfiltrados = this.eventos;
      }

    );

  }

}
