import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { HeaderComponent } from './header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {TableServiceService} from "./services/table-service.service";
import {baseURL} from "./baseurl";
import { ProcessHttpmsgService } from "./services/process-httpmsg.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [
    TableServiceService,
    ProcessHttpmsgService,
    {provide: 'baseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
