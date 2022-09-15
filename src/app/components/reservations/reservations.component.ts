import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/service/data.service';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  reservations:any;
  token: any;
  role:any;
  constructor(private route:ActivatedRoute,private router: Router,private dataService:DataService) { }

  ngOnInit(): void {
    this.getReservationData();
    this.token=localStorage.getItem('token');
    this.tokentest();
  }
 tokentest(){
   if (this.token == null){
    this.router.navigate(['/']);
   }
 }
  getReservationData(){
    this.dataService.getDataReservation().subscribe(res => {
    this.reservations = res;
    });
  }
  deleteReservationData(id : any){
    this.dataService.deleteReservationsData(id).subscribe(res=>{
      this.getReservationData();
    })
    }
    getroole(){
      this.dataService.getrole().subscribe(res => {
      this.role = res;
      console.log(this.role);
      });
    }
}
