import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/class/client';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {
  client = new Client();
  clients:any;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
  }
  insertClientData(){
    this.dataService.inserClientsData(this.client).subscribe(res=>{
      this.router.navigate(['/admin/clients']);
    })
    }
}
