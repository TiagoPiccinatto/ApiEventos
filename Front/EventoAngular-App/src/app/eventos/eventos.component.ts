import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: {tema:string, local:string, id:number}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
         evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || evento.id.toString().indexOf(filtrarPor) !== -1
    )
  }
  ngIf="exibirimagem";
  exibirimagem = false;
  public eventos: any = [];
  public eventosfiltrados: any = [];

  tamanhoimg: number = 150;
  tamanhomargin = 2;
  private _filtrolista: string = "";

  public get filtrolista(){
    return this._filtrolista;
  }


  public set filtrolista(value: string){
    this._filtrolista = value;
    this.eventosfiltrados = this.filtrolista ? this.filtrarEventos(this.filtrolista) : this.eventos;
  }



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvento();
  }

  public getEvento(): void {
    this.http.get('https://localhost:5001/api/test/Evento').subscribe(
      response => {
        this.eventos = response,
        this.eventosfiltrados = this.eventos;
      }

    );

  }


}
