import { Component, OnInit } from '@angular/core';
import { ɵangular_packages_common_http_http_a, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private http: HttpClient) { }
  values: any;
  ngOnInit() {
    this.getValues();
  }
  getValues() {
  this.http.get('http://localhost:5000/WeatherForeCast').subscribe(response => { this.values = response; }
  , error => { console.log(error); }
  ); }
}
