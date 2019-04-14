import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  data = [];
  
// private change = new BehaviorSubject([]);
  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    // this.firestoreService.saveOrder().subscribe((men) => {
    //   console.log(men)
    // }
  }
  change(tipopedido: string){
    this.firestoreService.getMenu().subscribe((menu) => {
      // console.log(menu)
      const filterMenu = menu.filter((objeto: any) => {
        if(objeto.tipo === tipopedido ){
          return objeto;
        }
      })
      this.data = filterMenu;
  })

  }
  add(arrayObject){
    
    this.firestoreService.showOrder(arrayObject)
    // console.log(arrayObject);
   
  }
  deleteFood(i){
    console.log(this.data[i])
  }




}
