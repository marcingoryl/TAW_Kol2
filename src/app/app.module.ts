import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MGDataService} from "./services/mg-data.service";

import { OrdersMGComponent } from './components/orders-mg/orders-mg.component';
import { OrdersItemMGComponent } from './components/orders-item-mg/orders-item-mg.component';
import { OrdersDetailsMGComponent } from './components/orders-details-mg/orders-details-mg.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    OrdersMGComponent,
    OrdersItemMGComponent,
    OrdersDetailsMGComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [MGDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
