import { Directive, HostListener, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[minHeight]',
  providers: [{provide: NG_VALIDATORS, useExisting: ImageMinHeightDirective, multi: true}]
})
export class ImageMinHeightDirective implements Validator {
  @Input() minWidth: number;
  private width: number;
  file: any;
  image: any;
  @HostListener('change', ['$event']) onChange($event) {
    const files = $event.target.files || $event.srcElement.files;
    this.file = files[0];
  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.minWidth ? this.minHeightValidator()(control)
      : null;
  }
  minHeightValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const obj = {'height': {}};
      this.image = new Image();
      this.image.onload = event => {
        this.width = event.path[0].width;
        obj.height = {value: 'invalid'};
      };
      this.image.src = window.URL.createObjectURL(this.file);
      return obj;
    };
  }
}
