import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsService } from './shared/contact-us.service';
import { FormsModule } from '@angular/forms';
import { ImageMinWidthDirective } from './shared/image-min-width.directive';
import { FileValueAccessor } from './shared/file-control-value-accessor';
import { ImageMinHeightDirective } from './shared/image-min-height.directive';


@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule
  ],
  declarations: [
    ContactUsComponent,
    ImageMinWidthDirective,
    ImageMinHeightDirective,
    FileValueAccessor
  ],
  providers: [
    ContactUsService
  ],
  bootstrap: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
