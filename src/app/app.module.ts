import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module'; // Importe o MaterialModule aqui
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClientFormComponent } from './client-form/client-form.component';
import { ContratoFormComponent } from './contrato-form/contrato-form.component';
import { ContratoListGridComponent } from './contrato-list-grid/contrato-list-grid.component';

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
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule, // Importe o MaterialModule aqui
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
