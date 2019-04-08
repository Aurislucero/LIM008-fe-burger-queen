import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {
  users: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data=>{
      this.users = data;
      console.log(this.users);
    
    });

  }

}
