import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
  }

  newUser = new FormGroup({
    firstName: new FormControl('', [Validators.required,]),
    lastName: new FormControl('', [Validators.required,]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  createNewUser(){
   //console.log(this.newUser.value);
   let user = this.newUser.value;
    this.service.postUser(user.firstName, user.lastName, user. email, user.password).subscribe((resp:any)=>{
      console.log("resp", resp);
    })
  }
}
