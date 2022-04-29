import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersMGComponent} from "./components/orders-mg/orders-mg.component";
import {OrdersDetailsMGComponent} from "./components/orders-details-mg/orders-details-mg.component";

const routes: Routes = [
  {
    path: '',
    component: OrdersMGComponent
  },
  {
    path: 'orders/:id',
    component: OrdersDetailsMGComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
