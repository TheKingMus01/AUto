import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  form: FormGroup | any;
  submitted =  false;
  data:any;
  token:any;

  constructor(private router : Router, private formbuilder : FormBuilder, private dataService : DataService, private toastr : ToastrService) { }

  ngOnInit(): void {
    this.createForm();
    this.token=localStorage.getItem('token');
  }
  createForm() {
    this.form = this.formbuilder.group({

      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
  }, {
    validators: MustMatch('password', 'confirmpassword'),
  });
  }

}
function MustMatch(arg0: string, arg1: string): any {
  throw new Error('Function not implemented.');
}


