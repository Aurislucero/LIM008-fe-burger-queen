import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';





interface Product {
nombre: string,
precio:number,
cantidad:number,
subtotal:number,
tipo:string
}
export interface newProduct {
  nombreCliente: string,
  pedido : Product[] ,
  total:number
  }


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

public producto: Product[] = [];


//  private sumTotal = new BehaviorSubject(0);
//  currentSumTotal =this.sumTotal.asObservable();

 private name = new  BehaviorSubject('') ;
 currentName  = this.name.asObservable();
 
 

 private tablaPedido = new  BehaviorSubject([]) ;
 currentTable = this.tablaPedido.asObservable();

  order = []
  

  constructor(private firestore : AngularFirestore) { }

  // changeQuantify(value){
  //   this.quantifySource.next(value);
  //   // console.log(value)
  // }
   
  getMenu() {
    return this.firestore.collection('menu').valueChanges();
  }
  changeNameValue(nombre){
    this.name.next(nombre);
  }
  showNewObject(arrayObject){
    this.producto.push(arrayObject);
    this.tablaPedido.next(this.producto)
    // console.log("estoy en un servidor",this.order);
    
  }
  cantidad(objProd,cantidad){
    console.log(cantidad);
    
    // this.order.push(array);
    // this.tablaPedido.next(this.order) 
  this.producto=this.producto.map(elem=>{
   if(elem.nombre === objProd.nombre){
     const newObj={
      ...elem,
      cantidad: parseInt(cantidad),
      subtotal: parseInt(cantidad)*elem.precio
     }
    return newObj ;
   }
   return elem;
 })
 console.log(this.producto);
 this.tablaPedido.next(this.producto)
 
  }
  // sumTotal(){
  //   this.producto.reduce((a,b:)=>{
  //    return a+b.precio
  //   });
  // }

  // newTable(arrayObject){
    
  // }

  

  // sumTotal(){
  // return this.order.reduce( (total, order)=>{return total + order.precio;},0)

  // }
 

  // addpedido(){

  // }
  // saveOrder(){
  //     return this.firestore.collection('menu').add(this.items) 
 

  
}
