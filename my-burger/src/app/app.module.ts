import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavComponent } from './nav/nav.component';



import { InitComponent } from './init/init.component';


import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// PARA FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { OrderComponent } from './components/home/order/order.component';
import { OrderListComponent } from './components/home/order-list/order-list.component';



@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    // NavComponent,
    InitComponent,
    HomeComponent,
    NavComponent,
    OrderComponent,
    OrderListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
