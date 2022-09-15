import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/service/data.service';

@Component({
  selector: 'app-anniversaires',
  templateUrl: './anniversaires.component.html',
  styleUrls: ['./anniversaires.component.css']
})
export class AnniversairesComponent implements OnInit {
  anivs:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getAniv();
  }
  getAniv(){
    this.dataService.getDataAnivers().subscribe(res => {
    this.anivs = res;

    });
  }

  deleteAnnivData(id : any){
    this.dataService.deleteAniverssData(id).subscribe(res=>{
      this.getAniv();
    })
    }
}
