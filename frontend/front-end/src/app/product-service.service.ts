import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
const API_URL = 'http://0.0.0.0:8000/products/';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  getProductList(){
   
    var headerObject = {
      "Content-Type":"application/json",
      
    }
    const headers = new HttpHeaders(headerObject);    
   //console.log(headerObject);
   //console.log(requestObject);
   return this.http.get(API_URL+'getAllProducts', { headers: headers });

  }

  getSearchedData(name:any){
    var headerObject = {
      "Content-Type":"application/json",
      
    }
    const headers = new HttpHeaders(headerObject);    
   //console.log(headerObject);
   //console.log(requestObject);
   return this.http.get(API_URL+'getProductsByName/'+name, { headers: headers });


  }
}
