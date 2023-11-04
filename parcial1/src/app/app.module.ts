import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VehiculoModule } from './vehiculo/vehiculo.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VehiculoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
