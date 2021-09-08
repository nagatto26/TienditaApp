import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { of } from 'rxjs';
import * as datos from '../../assets/json/db.json'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  elemento: any;

  private url:string = "http://localhost:3000/productos"

  constructor(private http: HttpClient) { }

  getProducts(){
    return of(datos.productos)
  }

  getSingleProduct(id: number) {
    let prods = datos.productos.filter(prod=>{
      return prod.id === id
    })
    this.elemento = prods
    return of(this.elemento)        
  }

  getForCategory(categoria:string){
    let prods = datos.productos.filter(prod=>{
       return prod.category === categoria 
      })
    return of(prods)
  }

  getForTermino(termino:string){
    let prods = datos.productos.find(prod=>{
      let obj = prod.name.toLocaleLowerCase().trim().includes(termino)
      console.log("OBJ",obj)
      return obj
     })
     return of(prods)
  }
}