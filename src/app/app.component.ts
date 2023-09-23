import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpIntercepotors';
  path="";
  result:any;
  constructor(private http:HttpClient){
    this.path="https://api.github.com/search/repositories?q=angular";
    this.result = this.http.get(this.path);
  }
}
