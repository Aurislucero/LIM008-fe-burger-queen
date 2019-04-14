import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';

import { InitComponent } from './init/init.component';
// import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'home', component:HomeComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

