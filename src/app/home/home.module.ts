import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AskAColleagueComponent } from './ask-a-colleague/ask-a-colleague.component';
import { FeedComponent } from './feed/feed.component';
import { CompaniesComponent } from './companies/companies.component';
import { ServiceDirectoryComponent } from './service-directory/service-directory.component';
import { HomeComponent } from './home.component';
import { HomeService } from './shared/home.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    FeedComponent,
    AskAColleagueComponent,
    CompaniesComponent,
    ServiceDirectoryComponent,
    HomeComponent
  ],
  providers: [
    HomeService
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
