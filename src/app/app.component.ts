import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMSA';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }
  Register(){
    this.router.navigate(["register"]);
  }
}
