import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // h1Style= false;
  constructor() { }

  ngOnInit() {
  }
  firstClick() {
    console.log('clicked');
    // this.h1Style = true;
  }
  
}


 
