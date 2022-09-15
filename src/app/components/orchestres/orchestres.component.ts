import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/service/data.service';
@Component({
  selector: 'app-orchestres',
  templateUrl: './orchestres.component.html',
  styleUrls: ['./orchestres.component.css']
})
export class OrchestresComponent implements OnInit {
  orchestres:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getOrchestreData();
  }
  getOrchestreData(){
    this.dataService.getDataOrchestre().subscribe(res => {
    this.orchestres = res;
    });
  }
  deleteOrchestreData(id : any){
    this.dataService.deleteOrchestresData(id).subscribe(res=>{
      this.getOrchestreData();
    })
    }
}
