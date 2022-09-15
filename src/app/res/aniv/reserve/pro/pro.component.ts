import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Aniv } from 'src/app/class/aniv';
import { Res } from 'src/app/class/res';
import { Clienttid } from 'src/app/class/clienttid';

import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  aniv = new Aniv();
  anivs:any;
  constructor(private _formBuilder: FormBuilder, private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });
    this.fiveFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
    });
  }
  insertanniv(){
    this.dataService.inserAnniData(this.aniv).subscribe(res=>{
        console.log(res);

      //this.router.navigate(['/aniv/reserve/a']);
      })
    }

    resan(){
      this.dataService.insertProAniv().subscribe(res=>{

         console.log(res);
             this.router.navigate(['/aniv/reserve/facture']);

        })
      }
}
