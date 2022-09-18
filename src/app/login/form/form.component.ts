import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/class/login';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
import { Toast , ToastrService } from 'ngx-toastr';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted= false;
login = new Login;
submitte=false;
 token: any;
 form : FormGroup | any;

  data: any;


  constructor(private dataService:DataService
    ,private router: Router, private toastr:ToastrService
    ,private formBuilder:FormBuilder) { }
  /*form : FormGroup =this.formBuilder.group( {
    email:['',[Validators.required, Validators.email]],
    password :['',[Validators.required]]
    });*/

  LoginForm(){

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

  });

   /* this.form = this.formBuilder.group( {
	email:['',[Validators.required, Validators.email]],
	password :['',[Validators.required]]
	})*/
	}

  ngOnInit(): void {
   // this.LoginForm();
   this.LoginForm();
  //  this.checktock();
  }
  // checktock(){
  //   this.token=localStorage.getItem('token');
  //   if (this.token=! null){
  //     this.router.navigate(['/admin']);
  //   }
  // }
  get f(){

    return this.form.controls;}


Submit(){


  this.submitted = true;
  if(this.form.invalid) {
    return;   }
    this.dataService.getDatalogin(this.form.value).subscribe(res =>{
      this.data = res;
      //console.log(res);
      if(this.data.status ===1) {
        this.token = this.data.data.token;
        localStorage.setItem('token', this.token);
        this.router.navigate(['/admin']).then(() => {
          window.location.reload();
        });
        this.toastr.success(JSON.stringify(this.data.message),JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }
      else if(this.data.status ===0) {
        this.toastr.error(JSON.stringify(this.data.message),JSON.stringify(this.data.code), {
          timeOut: 2000,
          progressBar: true
        });
      }

    });
  }

/*
  this.dataService.getDatalogin(this.login).subscribe(res=>{
 if(this.form.status == "VALID"){
    this.router.navigate(['/admin']);}
    else
    window.location.reload();

  })*/

}
