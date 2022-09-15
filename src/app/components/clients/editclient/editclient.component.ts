import { Component, OnInit } from '@angular/core';
import{DataService} from 'src/app/service/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Client } from 'src/app/class/client';
@Component({
  selector: 'app-editclient',
  templateUrl: './editclient.component.html',
  styleUrls: ['./editclient.component.css']
})
export class EditclientComponent implements OnInit {
  id:any;
  data:any;
  client = new Client;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
this.getClientData();
  }
  getClientData(){
    this.dataService.getClientsById(this.id).subscribe(res => {
    this.data = res;
    this.client= this.data;
    });
  }
  updateClient(){
    this.dataService.updateClientsData(this.id,this.client).subscribe(res => {
      this.router.navigate(['/admin/clients']);
    });
  }
}
