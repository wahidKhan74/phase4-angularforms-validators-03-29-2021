import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { from } from 'rxjs';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    TestComponent
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
