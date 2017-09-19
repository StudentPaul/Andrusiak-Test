import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[maxSize]',
  providers: [{provide: NG_VALIDATORS, useExisting: ImageMaxSizeDirective, multi: true}]
})
export class ImageMaxSizeDirective implements Validator {

   private _maxSize: number;
   get maxSize(): number {
     return this._maxSize;
   }
   @Input() set maxSize(value: number) {
     this._maxSize = value * 1024 * 1024;
   }

  private width = 0;
  fileSize: number;
  constructor(private element: ElementRef) {
  }
  @HostListener('change', ['$event']) onChange($event) {
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];
    this.fileSize = file.size;
  }

  validate(control: AbstractControl): {[key: string]: any} {

    return this.maxSize ? this.maxSizeValidator()(control)
      : null;
  }
  maxSizeValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      return this.fileSize > this.maxSize ? {'size': {value: 'invalid'}} : null;
    };
  }
}

