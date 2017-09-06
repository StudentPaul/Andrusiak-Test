import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsComponent } from './contact-us.component';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsService } from './shared/contact-us.service';

@NgModule({
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ],
  declarations: [
    ContactUsComponent
  ],
  providers: [
    ContactUsService
  ],
  bootstrap: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
