import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {


  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,

    ) {}

  ngOnInit(): void {
  this.validacao();
  }


  public validacao(): void {
  this.form = this.fb.group({
  local: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  dataEvento: ['', Validators.required],
  tema: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
  qtPessoas: ['', [Validators.required, Validators.max(300)]],
  lote: ['', Validators.required],
  imagemUrl: ['', Validators.required],
  telefone: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  });
  }

  public resetform(): void {
  this.form.reset();
  }

}
