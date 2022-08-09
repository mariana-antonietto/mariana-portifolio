import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagInicial } from './components/pag inicial/pag-inicial.component';
import { IconeComponent } from './components/icone/icone.component';

@NgModule({
  declarations: [
    AppComponent,
    PagInicial,
    IconeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
