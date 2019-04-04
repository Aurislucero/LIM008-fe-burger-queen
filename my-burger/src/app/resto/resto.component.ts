import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;
  constructor( private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    // this.success = true;
}

}
