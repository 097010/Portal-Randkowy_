import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { count } from 'rxjs/operators';
import { AlertifyService } from '../_services/alertify.service';
declare let alertify: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService ,  private alertifyService: AlertifyService) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.model).subscribe(next => {
      alertify.success('Zalogowałeś się do aplikacji');
    }, error => {
      alertify.error('wystąpił błąd logowania');
    });
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    alertify.message('Zostałeś wylogowany');
  }
}
