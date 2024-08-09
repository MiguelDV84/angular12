import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
import { Test3Component } from './test3/test3.component';
import { DirectiveDirective } from './directive.directive';
import { Directive2Directive } from './directive2.directive';
import { HomeModule } from './pages/home/home.module';
import { AdminModule } from './pages/admin/admin.module';
import { BuyModule } from './pages/buy/buy.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    DirectiveDirective,
    Directive2Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    AdminModule,
    BuyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
