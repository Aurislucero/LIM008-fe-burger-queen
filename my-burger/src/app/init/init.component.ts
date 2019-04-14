import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  constructor( private  firestoreService: FirestoreService) { }

  ngOnInit() {}
    enviarMensaje(mensajcliente) {
      console.log(mensajcliente)
      this.firestoreService.changeNameValue(mensajcliente);
  }
}
