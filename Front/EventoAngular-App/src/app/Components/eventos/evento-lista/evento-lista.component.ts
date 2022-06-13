import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { IEvento } from 'src/app/models/IEvento';
import { EventoService } from 'src/app/services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent implements OnInit {


  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toast: NgToastService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) { }

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

  public filtrarEventos(filtrarPor: string): IEvento[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: {tema:string, local:string, id:number}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
         evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1 || evento.id.toString().indexOf(filtrarPor) !== -1
    )
  }

  public set filtrolista(value: string){
    this._filtrolista = value;
    this.eventosfiltrados = this.filtrolista ? this.filtrarEventos(this.filtrolista) : this.eventos;
  }



  public ngOnInit(): void {
    this.getEvento();
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1500);
  }

  public getEvento(): void {
    this.eventoService.getEvento().subscribe(
      response => {
        this.eventos = response,
        this.eventosfiltrados = this.eventos;
      }

    );

  }



  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>): void  {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toast.success({detail:"Evento Deletado",summary:'Evento Deletado Com Sucesso',duration:3000});
  }

  decline(): void {
    this.modalRef?.hide();
    this.toast.error({detail:"Evento Nao Deletado",summary:'Este Evento Nao foi Deletado',duration:3000});
  }

  Novo(): void {
    this.router.navigate(['/eventos/detalhe']);
  }


  detalheEvento(id: number): void {
this.router.navigate([`/eventos/detalhe/${id}`]);

}

}
