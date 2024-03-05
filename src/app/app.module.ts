import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularComponent } from './formular/formular.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { PersonService } from './person.service';
import { DisplayService } from './display.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FormularComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    provideClientHydration(),
    PersonService,
    DisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
