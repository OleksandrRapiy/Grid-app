import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './views/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewGridComponent } from './views/ag-grid/view-grid/view-grid.component';
import { FormsModule } from '@angular/forms';
import { HeaderGridComponent } from './views/ag-grid/header-grid/header-grid.component';
import {AgGridModule} from "@ag-grid-community/angular";
import { YoutubeService } from './services/youtube.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewGridComponent,
    HeaderComponent,
    HeaderGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AgGridModule.withComponents([
      HeaderGridComponent
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
