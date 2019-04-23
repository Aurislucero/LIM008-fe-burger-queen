import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { summaryFileName } from '@angular/compiler/src/aot/util';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public totales: number;
  contador: number = 1;
  nombres: string;
  arrayObject = [];
  newArrayObject = [];
  // public total: number;
  // precio : number;


  constructor(private firestoreService: FirestoreService) {
    this.firestoreService.currentName.subscribe(value => {
      this.nombres = value;
    })

    this.firestoreService.currentTable.subscribe(obj => {
      this.arrayObject = obj;

    })


    // este suscribe me trae el total de los subtotales
    this.firestoreService.currentSumTotal.subscribe(subtotal => {
      this.totales = subtotal;
    })

    this.firestoreService.currentDeleteTotal.subscribe(total => {
      this.arrayObject = total;

    })
  }
  showList(emp, cantidad) {
    this.firestoreService.cantidad(emp, cantidad);
  }
  deleteList(emp) {
    console.log(emp);
    this.firestoreService.deleteTotal(emp);
  }
  savePedido() {
    this.firestoreService.sendOrder();
    location.reload();
  }

  ngOnInit() {
  }


}
