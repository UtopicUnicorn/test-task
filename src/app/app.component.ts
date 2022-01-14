import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService) {
  }
  title = 'test-task';

  ngOnInit() {
    const potToken = localStorage.getItem('token');
    if(potToken!==null){
      this.auth.setToken(potToken);
    }
  }
}
