import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { BlueBarComponent } from './components/blue-bar/blue-bar.component';
import { BaseImgComponent } from './components/base-img/base-img.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SearchBarComponent,
    BlueBarComponent,
    BaseImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
