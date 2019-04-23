
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { AngularFireList } from 'angularfire2/database';
import { database } from 'firebase';


// un solo producto
interface Product {
  nombre: string,
  precio:number,
  cantidad:number,
  subtotal:number,
  tipo:string
  }
// interfaz del pedido
  export interface newProduct {
    nombreCliente: string,
    pedido : Product[] ,
    total:number
    }

@Injectable({
  providedIn: 'root'
})


export class FirestoreService {
public newList: newProduct = {
    nombreCliente: "",
    pedido : [] ,
    total: 0
  }
productList: AngularFireList<any>;

public producto: Product[] = [];
nombr:string;

 private sumTotals = new BehaviorSubject(0);
 currentSumTotal =this.sumTotals.asObservable();
//obtengo el nombre del cliente
 private name = new  BehaviorSubject('') ;
 currentName  = this.name.asObservable();
 
 

 private tablaPedido = new  BehaviorSubject([]) ;
 currentTable = this.tablaPedido.asObservable();
 private deletetotals = new  BehaviorSubject([]) ;
 currentDeleteTotal = this.deletetotals.asObservable();
 

  order = []
  countTotal: number;
  nameUser:string;

  

  constructor(private firestore : AngularFirestore ) {
    this.sendOrder;
   }

  // changeQuantify(value){
  //   this.quantifySource.next(value);
  //   // console.log(value)
  // }

  // obtengo el nombre del cliente
  changeNameValue(nombre){
    this.nameUser = nombre;
    this.name.next(nombre);
  }
   //obtengo el menu segun el filtro
  getMenu() {
    return this.firestore.collection('menu').valueChanges();
  }
  
    
  
//muestra el array de objetos de los pedidos
  showNewObject(arrayObject){
    this.producto.push(arrayObject);
    this.tablaPedido.next(this.producto);
    this.sumTotal();
    // sumTotal();
    // console.log("estoy en un servidor",this.order);
    
  }
  // agrego subtotal y cambio la cantidad
  cantidad(objProd,cantidad){
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
 console.log("aqui thisproducto",this.producto);
 this.tablaPedido.next(this.producto)
  this.sumTotal();
  }

  sumTotal(){
 this.countTotal=0;
  for(let i=0;i<this.producto.length;i++){
     this.countTotal+= this.producto[i].subtotal;
  }
  this.sumTotals.next((this.countTotal));
  }

  deleteTotal(i: any){
    
    let index = this.producto.indexOf(i);
    console.log("aqui i",i);
    console.log("muestra",this.producto)
    if(index > -1){
      this.producto.splice(index,1);
    }
    
    this.deletetotals.next(this.producto);
    this.sumTotal();
  }

  sendOrder(){

    const listProduct = this.newList= {
      ...this.newList,
      nombreCliente: this.nameUser ,
      pedido : this.producto,
      total:this.countTotal
    }
  this.firestore.collection('pedido').add(listProduct);
  //  console.log(listProduct);
  location.reload();
  }
 
   

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
