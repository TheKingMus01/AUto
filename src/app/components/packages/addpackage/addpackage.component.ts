import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Package } from 'src/app/class/package';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-addpackage',
  templateUrl: './addpackage.component.html',
  styleUrls: ['./addpackage.component.css']
})
export class AddpackageComponent implements OnInit {

  package = new Package();
  packages:any;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
  }
  insertPackageData(){
    this.dataService.inserPackagesData(this.package).subscribe(res=>{
      this.router.navigate(['/admin/packages']);
    })
    }
}
