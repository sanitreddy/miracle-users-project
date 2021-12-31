import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  result: Array<any>;
  newValue: number = 3;

  constructor(private http: HttpClient) { }

  ngOnInit() {      
      // Simple GET request with response type <any>
      this.http.get<any>('http://localhost:3000/').subscribe(data => {
          this.result = data
          console.log(this.result);
      })
  }

  OnSave(event:any){
    this.newValue = +event.target.value.slice(2);
    console.log(this.newValue);
  }
}
