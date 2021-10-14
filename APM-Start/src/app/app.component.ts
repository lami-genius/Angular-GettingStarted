import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',  // pm - product managment hence root, root app component
  template: `<div>
  <h1>{{pageTitle}}</h1>
  <p>My first component</p>
  </div>`
})


// Code - (OOP class design) attributes and methods
export class AppComponent {
  pageTitle: string = "Acme Product Management";
}
