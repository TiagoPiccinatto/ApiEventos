import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss']
})
export class EventoDetalheComponent implements OnInit {


  form!: FormGroup;

  constructor(
    private fb: FormBuilder,) { }

  ngOnInit(): void {
  this.validacao();
  }


  public validacao(): void {
  this.form = new FormGroup({
  local: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
  dataEvento: new FormControl('', Validators.required),
  tema: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(4)]),
  qtPessoas: new FormControl('', [Validators.required, Validators.max(300)]),
  lote: new FormControl('', Validators.required),
  imagemUrl: new FormControl('', Validators.required),
  telefone: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  });
  }

}
