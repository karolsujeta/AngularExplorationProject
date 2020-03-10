import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadFileComponent } from './components/read-file/read-file.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowResultsComponent } from './components/show-results/show-results.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadFileComponent,
    ShowResultsComponent
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
