/* tslint:disable:no-unused-variable */

import { DatePipe } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { DateTimePipe } from './DateTime.pipe';

describe('Pipe: DateTimee', () => {
  it('create an instance', () => {
    let pipe = new DateTimePipe('pt-BR'); //-->> uma string de idioma
    expect(pipe).toBeTruthy();
  });
});
