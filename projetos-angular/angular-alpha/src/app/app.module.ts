import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, CentralDeComps } from './app-routing.module';
import { AppComponent } from './app.component';

//importando o FormsModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlterarTextoDirective } from './alterar-texto.directive';

@NgModule({
  declarations: [
    AppComponent,
    CentralDeComps,
    NgForComponent,
    AlterarTextoDirective      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
