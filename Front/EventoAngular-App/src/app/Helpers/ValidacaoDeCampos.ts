import { AbstractControl, FormGroup } from "@angular/forms";


export class ValidacaoDeCampos {
  static MustMatch(controlName: string, matchingControlName: string): any {
    return (group: AbstractControl) => {
      const formGroup = group as FormGroup;
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        // return if another validator has already found an error on the matchingControl
        return null ;
      }


      if(control.value != matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });

      }else {
        matchingControl.setErrors(null);
      }

  };
}

}
