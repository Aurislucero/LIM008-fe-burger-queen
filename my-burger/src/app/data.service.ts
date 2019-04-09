import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //  private _url: string = '\src\datos.json'
  constructor(private http: HttpClient) { }
  // firstClick(){
  //   return console.log('clicked');
  // }
  getUsers() {
    return this.http.get('https://raw.githubusercontent.com/Aurislucero/LIM008-fe-burger-queen/dev/my-burger/src/datos.json');
  }
}
