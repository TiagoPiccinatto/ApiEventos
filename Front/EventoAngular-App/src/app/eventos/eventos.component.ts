import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;




  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvento();
  }

  public getEvento(): void{
    this.http.get('https://localhost:44368/api/test/Evento').subscribe(
      response => this.eventos = response,

    );

  }


}
