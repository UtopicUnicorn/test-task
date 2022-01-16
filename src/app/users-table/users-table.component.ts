import {Component, OnInit} from '@angular/core';
import {userInfoClass} from "./user-info.class";
import {TableServiceService} from "../services/table-service.service";
import {SourcesClass} from "./sources.class";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users!: userInfoClass[];
  sources!: SourcesClass[];
  errMessage: string | undefined;

  userTableDisplayedColumns!: string[];
  sourceTableDisplayedColumns!: string[];

  constructor(private tableService: TableServiceService, private router: Router) {
  }

  ngOnInit(): void {
    this.tableService.getUsers().subscribe((data: userInfoClass[]) => this.users = data);
    this.tableService.getSources().subscribe((data: SourcesClass[]) => this.sources = data);

    this.userTableDisplayedColumns = ['avatar', 'email', 'first_name', 'last_name', 'action'];
    this.sourceTableDisplayedColumns = ['name', 'year', 'color', 'pantone_value'];

  }

  userDetails(user: userInfoClass): void {
    let id: number = +user.id;
    this.router.navigate(['user-detail/', id]);
  }

  delete(user: userInfoClass): void {
    this.users = this.users.filter(u => u !== user);
    this.tableService.deleteUser(user).subscribe();
  }


}


