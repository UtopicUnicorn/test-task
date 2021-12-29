import { Routes } from "@angular/router";

import {UsersTableComponent} from "./users-table/users-table.component";

export const routes: Routes = [
  {path:'table', component: UsersTableComponent},
  {path:'', redirectTo: '/table', pathMatch:'full'}
]
