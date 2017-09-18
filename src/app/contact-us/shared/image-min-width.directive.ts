import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[minWidth]',
  providers: [{provide: NG_VALIDATORS, useExisting: ImageMinWidthDirective, multi: true}]
})
export class ImageMinWidthDirective implements Validator {
  @Input() minWidth: number;
  private width = 0;
  file: any;
  image: any;
  constructor(private element: ElementRef, private renderer: Renderer) {
  }
  @HostListener('change', ['$event']) onChange($event) {
    const files = $event.target.files || $event.srcElement.files;
    this.file = files[0];
    this.image = new Image();
    this.image.onload = event => {
      this.width = event.path[0].width;
      alert(this.width);
      this.element.nativeElement.change();
    };
    this.image.src = window.URL.createObjectURL(this.file);
  }

  validate(control: AbstractControl): {[key: string]: any} {

    return this.minWidth ? this.minWidthValidator()(control)
      : null;
  }
  minWidthValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {

      return this.width < this.minWidth ? {'width': {value: 'hello'}} : null;
    };
  }
}

