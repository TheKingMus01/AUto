import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { Orchestre } from '../../../class/orchestre';
import { ToastrService} from 'ngx-toastr';
import {DataService} from '../../../service/data.service';


@Component({
  selector: 'app-addorchestre',
  templateUrl: './addorchestre.component.html',
  styleUrls: ['./addorchestre.component.css']
})
export class AddorchestreComponent implements OnInit {
  files:any;
  photo:any;
  price:any;
  data : any;
  submitted = false;
  form : FormGroup | any;

orchestre = new Orchestre();
  //File = new Orchestre();//class
  constructor(private toastr:ToastrService,private formBuilder:FormBuilder, private dataService : DataService) { }


  createForm(){
    this.form = this.formBuilder.group({
      photo:['',Validators.required],
      Price:['',Validators.required]
    });
    }
  ngOnInit(): void {
    this.createForm();
  }

    get f(){
    return this.form.controls;
    }
    uploadPhoto(event: any){
      this.files =event.target.files[0];

    }
    Submit(){
    this.submitted = true;
    this.orchestre.img=this.photo;

    }
}
