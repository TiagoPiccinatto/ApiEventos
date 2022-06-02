import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvento } from '../models/IEvento';

@Injectable(
//  {providedIn: 'root'}
)
export class EventoService {
  baseURL = 'https://localhost:5001/api/Evento';

  constructor(private http: HttpClient) { }


  public getEvento(): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(this.baseURL);
  }

  public getEventoById(id: number): Observable<IEvento> {
    return this.http.get<IEvento>(this.baseURL + '/' + id);
  }

  public getEventoByTema(tema: string): Observable<IEvento[]> {
    return this.http.get<IEvento[]>(this.baseURL + '/' + tema);
  }

}
