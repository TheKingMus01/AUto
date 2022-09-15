import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-fetetypes',
  templateUrl: './fetetypes.component.html',
  styleUrls: ['./fetetypes.component.css']
})
export class FetetypesComponent implements OnInit {
  fetetypes:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getFetetypeData();
  }
  getFetetypeData(){
    this.dataService.getDataFetetype().subscribe(res => {
    this.fetetypes = res;
    });
  }
  deleteFetetypeData(id : any){
    this.dataService.deleteFetetypesData(id).subscribe(res=>{
      this.getFetetypeData();
    })
    }
}
