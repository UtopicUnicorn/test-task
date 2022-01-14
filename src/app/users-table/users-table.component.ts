import {Component, OnInit} from '@angular/core';
import {userEntity} from "./userEntity";
import {TableServiceService} from "../services/table-service.service";
import {SourcesEntity} from "./sourcesEntity";
import {Router} from "@angular/router";
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {
  users!: userEntity[];
  sources!:SourcesEntity[];
  errMessage!: string;

  userTableDisplayedColumns!: string[];
  sourceTableDisplayedColumns!: string[];

  constructor(private tableService: TableServiceService, private router:Router){ }

  ngOnInit(): void {
    this.tableService.getUsers().subscribe((data:userEntity[])=>this.users = data);
    this.tableService.getSourcese().subscribe((data:SourcesEntity[])=>this.sources = data);

    this.userTableDisplayedColumns = ['avatar', 'email','first_name', 'last_name','action'];
    this.sourceTableDisplayedColumns = ['name','year', 'color', 'pantone_value'];

  }

  userDetails(user: userEntity) : void{
    let id: number = +user.id;
    this.router.navigate(['user-detail/', id]);
  }

  delete(user: userEntity) : void{
    this.users = this.users.filter(u=>u!==user);
    this.tableService.deleteUser(user).subscribe();
  }

  onValueChanged() : void{

  }


}


