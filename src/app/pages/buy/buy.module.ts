import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyComponent } from './buy/buy.component';
import { Buy2Component } from './buy2/buy2.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BuyComponent, Buy2Component],
})
export class BuyModule {}
