import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/service/data.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getClientData();
  }
  getClientData(){
    this.dataService.getDataClient().subscribe(res => {
    this.clients = res;
    });
  }
  deleteClientData(id : any){
    this.dataService.deleteClientsData(id).subscribe(res=>{
      this.getClientData();
    })
    }
}
