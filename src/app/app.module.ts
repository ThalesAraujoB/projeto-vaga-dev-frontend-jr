import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlueBarComponent } from './components/blue-bar/blue-bar.component';
import { BaseImgComponent } from './components/base-img/base-img.component';
import { ProductsBarComponent } from './components/products-bar/products-bar.component';
import { ProductsBar2Component } from './components/products-bar2/products-bar2.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SearchBarComponent,
    BlueBarComponent,
    BaseImgComponent,
    ProductsBarComponent,
    ProductsBar2Component,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
