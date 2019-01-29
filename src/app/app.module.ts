import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app.routing';

import { ViaCepService } from './services/via-cep.service';

import { AppComponent } from './app.component';
import { CepDetailsComponent } from './cep-details/cep-details.component';
import { TitleComponent } from './title/title.component';
import { CepComponent } from './cep/cep.component';

@NgModule({
  declarations: [
    AppComponent,
    CepDetailsComponent,
    TitleComponent,
    CepComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ViaCepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
