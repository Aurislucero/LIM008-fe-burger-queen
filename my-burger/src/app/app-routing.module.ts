import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesayunoComponent } from './desayuno/desayuno.component';
import { RestoComponent } from './resto/resto.component';
import { InitComponent } from './init/init.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  { path: '', component: InitComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nav', component: NavComponent },
  { path: 'desayuno', component: DesayunoComponent },
  { path: 'resto', component: RestoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

