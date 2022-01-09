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
import {baseURL, loginURL, registerURL} from "./baseurl";
import { ProcessHttpmsgService } from "./services/process-httpmsg.service";
import {HttpClientModule} from "@angular/common/http";
import { UserEditorComponent } from './user-editor/user-editor.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import { LoginComponent } from './login/login.component';
import {AuthService} from "./services/auth.service";
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    HeaderComponent,
    UserEditorComponent,
    LoginComponent,
    RegistrationPageComponent,
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
    ReactiveFormsModule,
    MatInputModule,
    CommonModule,
    MatIconModule
  ],
  providers: [
    TableServiceService,
    ProcessHttpmsgService,
    AuthService,
    {provide: 'baseURL', useValue: baseURL},
    {provide: 'loginURL', useValue: loginURL},
    {provide: 'registerURL', useValue: registerURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
