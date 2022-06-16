import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacaoDeCampos } from '@app/Helpers/ValidacaoDeCampos';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.validacao();
  }




  public validacao(): void {

    const formOption: AbstractControlOptions ={
      validators: ValidacaoDeCampos.MustMatch('senha', 'confirmarSenha')
    }



   this.form = this.fb.group({
    primeiroNome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    ultimoNome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmarSenha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    usuario: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],

  }, formOption);
}

}



