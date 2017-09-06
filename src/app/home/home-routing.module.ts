import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServiceDirectoryComponent } from './service-directory/service-directory.component';
import { FeedComponent } from './feed/feed.component';
import { AskAColleagueComponent } from './ask-a-colleague/ask-a-colleague.component';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  { path: '', redirectTo: 'service', pathMatch: 'full' },
  { path: 'feed',  component: FeedComponent },
  { path: 'ask',  component: AskAColleagueComponent },
  { path: 'companies',  component: CompaniesComponent },
  { path: 'service',  component: ServiceDirectoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
