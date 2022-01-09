import { Routes } from "@angular/router";

import {UsersTableComponent} from "./users-table/users-table.component";
import {UserEditorComponent} from "./user-editor/user-editor.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";

export const routes: Routes = [
  {path:'table', component: UsersTableComponent},
  {path:'user-detail/:id', component: UserEditorComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationPageComponent},
  {path:'', redirectTo: '/login', pathMatch:'full'}
]
