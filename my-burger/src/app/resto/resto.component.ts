import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {
  users: object;

  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor( private formBuilder: FormBuilder,
    private data: DataService) { }

 
  ngOnInit() {

    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
    // aqui extraigo la lista del resto del dia
      this.data.getUsers().subscribe(data=>{
        this.users = data;
        console.log(this.users);
      
      });
  
  
  }
  onSubmit() {
    this.submitted = true;
    // this.success = true;
}

}
