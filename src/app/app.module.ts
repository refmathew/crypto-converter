import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RateComponent } from './components/rate/rate.component';
import { InputComponent } from './components/input/input.component';
import { InputWrapperComponent } from './components/input-wrapper/input-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RateComponent,
    InputComponent,
    InputWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
