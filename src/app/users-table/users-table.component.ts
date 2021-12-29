import { Component, OnInit } from '@angular/core';
import {userEntity} from "./userEntity";
import {TableServiceService} from "../services/table-service.service";
import {SourcesEntity} from "./sourcesEntity";

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users!: userEntity[];
  sources!:SourcesEntity[];

  userTableDisplayedColumns!: string[];
  sourceTableDisplayedColumns!: string[];

  constructor(private tableService: TableServiceService){ }

  ngOnInit(): void {
    this.tableService.getUsers().subscribe((data:userEntity[])=>this.users = data);
    this.tableService.getSourcese().subscribe((data:SourcesEntity[])=>this.sources = data);

    this.userTableDisplayedColumns = ['email','first_name', 'last_name', 'avatar'];
    this.sourceTableDisplayedColumns = ['name','year', 'color', 'pantone_value'];


  }
}


