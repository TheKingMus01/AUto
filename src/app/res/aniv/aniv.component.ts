import { Component, OnInit , ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Client } from 'src/app/class/client';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
@Component({
  selector: 'app-aniv',
  templateUrl: './aniv.component.html',
  styleUrls: ['./aniv.component.css']
})
export class AnivComponent implements OnInit {
  isLinear = true;
  Nom: FormGroup;
  Prenom: FormGroup;
  Telephone: FormGroup;
  client = new Client();
  clients:any;
  constructor(private _formBuilder: FormBuilder, private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {

    this.Nom = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.Prenom = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.Telephone = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

  }
  insertClientData(){
  this.dataService.inserClientsData(this.client).subscribe(res=>{
      console.log(res);
      localStorage.setItem('client', "true");
    this.router.navigate(['/aniv/reserve/a']);
    })
  }

}
