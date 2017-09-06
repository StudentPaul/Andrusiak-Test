import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'contact-us',  loadChildren: 'app/contact-us/contact-us.module#ContactUsModule' },
  { path: 'home',  loadChildren: 'app/home/home.module#HomeModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
