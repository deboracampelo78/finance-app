import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientFormComponent } from './client-form/client-form.component';
import { ContratoFormComponent } from './contrato-form/contrato-form.component';
import { ContratoListGridComponent } from './contrato-list-grid/contrato-list-grid.component'

@NgModule({
  declarations: [
    AppComponent,
    ClientFormComponent,
    ContratoFormComponent,
    ContratoListGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
