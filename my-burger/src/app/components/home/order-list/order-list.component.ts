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
  newArrayObject = [];
  // precio : number;


  constructor( private  firestoreService: FirestoreService) { 
    this.firestoreService.currentName.subscribe(value=>{
      this.nombres=value;
    })

    this.firestoreService.currentTable.subscribe(obj=>{
      this.arrayObject = obj;
      
    })

  //   this.firestoreService.currentSaveArray.subscribe(obj=>{
      
  //     this.arrayObject=obj;
     
       
      
     
  //  })
    //  this.contador= num;
    //  this.sumTotal = this.firestoreService.sumTotal() ; 

    //  console.log(this.sumTotal);
     
    // }) 

//  sumTotal(){

//  }
    
   
  }
  showList( emp,cantidad){
    this.firestoreService.cantidad(emp,cantidad)
    
    
  }

  ngOnInit() {
  }
  

}
