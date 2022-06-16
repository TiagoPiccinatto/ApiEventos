import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacaoDeCampos } from '@app/Helpers/ValidacaoDeCampos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }



  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.validacao();
  }




  public validacao(): void {

    const formOption: AbstractControlOptions ={
      validators: ValidacaoDeCampos.MustMatch('senha', 'confirmarSenha')
    }



   this.form = this.fb.group({
    titulo: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    primeiroNome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    ultimoNome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    funcao: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    descricao: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmarSenha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],

  }, formOption);
}
public resetForm(event: any): void { // event e passado ao botao de reset do formulario com $event no html
  event.preventDefault();
  this.form.reset();
}




}
