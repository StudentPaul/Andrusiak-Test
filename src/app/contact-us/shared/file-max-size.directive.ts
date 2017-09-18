import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[maxSize]',
  providers: [{provide: NG_VALIDATORS, useExisting: FileMaxSizeDirective, multi: true}]
})
export class FileMaxSizeDirective implements Validator {
  @Input() width: number;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.width ? minWidthValidator(this.width)(control)
      : null;
  }
}
function  minWidthValidator(width): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {

    const forbidden = true;
    return forbidden ? {'toLowWidth': {value: control.value}} : null;
  };
}
