import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { BillingRoutingModule } from './billing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  declarations: [BillingComponent]
})
export class BillingModule { }
