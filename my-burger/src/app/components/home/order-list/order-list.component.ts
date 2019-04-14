import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  total = 0;
  contador :number = 1;
  nombres : string;
  arrayObject = [];

  constructor( private  firestoreService: FirestoreService) { 
    this.firestoreService.currentName.subscribe(value=>{
      this.nombres=value;
    })

    this.firestoreService.currentTable.subscribe(obj=>{
      this.arrayObject = obj;
      console.log(this.arrayObject);
    })

    this.firestoreService.currentQuantify.subscribe(num=>{
     this.contador= num;
    }) 
    // this.firestoreService.currentQuantify.subscribe(num=>{
    //   this.total = this.arrayObject.precio * this.contador;
    //  }) 

   
  }

 
  sumar(){
    this.contador= this.contador + 1;
  }
  restar(){
    this.contador= this.contador - 1;
  }
  ngOnInit() {
  }

}
