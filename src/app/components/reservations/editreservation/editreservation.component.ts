import { Component, OnInit } from '@angular/core';
import{DataService} from 'src/app/service/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Reservation } from 'src/app/class/reservation';
@Component({
  selector: 'app-editreservation',
  templateUrl: './editreservation.component.html',
  styleUrls: ['./editreservation.component.css']
})
export class EditreservationComponent implements OnInit {
  id:any;
  data:any;
  reservation = new Reservation;
  constructor(private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
this.getreservationData();
  }
UpdateRes(){
  this.dataService.updateReservationsData(this.id,this.reservation).subscribe(res => {
    this.router.navigate(['/admin']);
  });

}
getreservationData(){
  this.dataService.getReservationsById(this.id).subscribe(res => {
  this.data = res;
  this.reservation= this.data;
  });
}
}

