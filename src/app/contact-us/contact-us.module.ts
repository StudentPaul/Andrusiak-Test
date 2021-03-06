import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsService } from './shared/contact-us.service';
import { FormsModule } from '@angular/forms';
import { FileValueAccessor } from './shared/file-control-value-accessor';
import { ImageMaxSizeDirective } from './shared/image-max-size.directive';


@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    FormsModule
  ],
  declarations: [
    ContactUsComponent,
    ImageMaxSizeDirective,
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
