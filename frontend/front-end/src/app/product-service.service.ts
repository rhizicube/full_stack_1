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

  postUser(firstName:string, lastName: string, email: string, password: string){
    console.log("hit", firstName, lastName, email, password);
    const user = { firstName: firstName, lastName: lastName, email: email, password: password };

    var headerObject = {
      "Content-Type":"application/json",
    }
    
    const headers = new HttpHeaders(headerObject);   
    console.log(headerObject); 
   //console.log(headerObject);
   //console.log(requestObject);
   return this.http.post(API_URL+'createUser',user, { headers: headers });


  
  }
}
