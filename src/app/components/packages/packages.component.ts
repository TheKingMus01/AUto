import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Package } from '../../class/package';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  packages:any;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPackageData();
  }
  getPackageData(){
    this.dataService.getDataPackage().subscribe(res => {
    this.packages = res;
    });
  }
  deletePackageData(id : any){
    this.dataService.deletePackagesData(id).subscribe(res=>{
      this.getPackageData();
    })
    }
}
