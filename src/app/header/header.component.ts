import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public href!: string;

  constructor(private authService: AuthService,
              public router: Router) {
  }

  ngOnInit(): void {
  }
  logout(): void{
    this.authService.logout();
    this.router.navigate(['login']);
  }

  onRegistration(): void{
    this.router.navigate(['registration']);
  }
}
