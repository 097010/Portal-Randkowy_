import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs/operators';
import { AuthService } from './_services/auth.service';
import { from } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  jwthelper = new JwtHelperService();

  constructor(private authServices: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.authServices.decodedToken = this.jwthelper.decodeToken(token);
    }
  }
}
