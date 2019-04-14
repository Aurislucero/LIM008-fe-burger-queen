import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Producto} from './collectionproduct';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

 private quantifySource = new BehaviorSubject(1);
 currentQuantify =this.quantifySource.asObservable();

 private name = new  BehaviorSubject('') ;
 currentName  = this.name.asObservable();
 


 private tablaPedido = new  BehaviorSubject([]) ;
 currentTable = this.tablaPedido.asObservable();

 
  order = []
  total = 0;

  constructor(private firestore : AngularFirestore) { }

  changeQuantify(value){
    this.quantifySource.next(value);
    // console.log(value)
  }
   
  getMenu() {
    return this.firestore.collection('menu').valueChanges();
  }
  changeNameValue(nombre){
    this.name.next(nombre);
  }
  showOrder(arrayObject){
    this.order.push(arrayObject);
    this.tablaPedido.next(this.order)
    // console.log(this.order);
  }

  // sumTotal(){
  // this.showOrder().reduce( (total, order)=>{
  //   total + order.precio
  // })
  // }

  // addpedido(){

  // }
  // saveOrder(){
  //     return this.firestore.collection('menu').add(this.items) 
  // }
 

  
}
