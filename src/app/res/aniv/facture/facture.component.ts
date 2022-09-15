import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {DataService} from 'src/app/service/data.service';
import {jsPDF} from  "jspdf";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
  reservations:any;
  clients:any;
  anivs:any;
  packs:any;
  myDate:any = new Date();
  @ViewChild('content',{static:false}) el!: ElementRef;
  title='ango';

  constructor(private dataService:DataService ) {
     }

  ngOnInit(): void {
    this.getRes();
    this.getClient();
    this.getAniv();
    this.getPack();
  }
  getRes(){
    this.dataService.lastres().subscribe(res => {
    this.reservations = res;
    this.reservations = Array.of(this.reservations);
    });
  }
  getClient(){
    this.dataService.lastclient().subscribe(res => {
    this.clients = res;
    this.clients = Array.of(this.clients);
    });
  }
  getAniv(){
    this.dataService.lastaniv().subscribe(res => {
    this.anivs = res;
    this.anivs = Array.of(this.anivs);
    });
  }
  getPack(){
    this.dataService.lastpack().subscribe(res => {
    this.packs = res;
    this.packs = Array.of(this.packs);
    });
  }
  makePDF(){
    //let pdf = new jsPDF('p','pt','a4');
    let pdf = new jsPDF("p", "pt", "b2");

    pdf.html(this.el.nativeElement,{ callback: (pdf)=>{ pdf.save("reservation.pdf");}});
    pdf.save();
    }
    /*makePDF(){
      let pdf = new jsPDF();
      pdf.text("hello",10,10);
      pdf.save();
      }*/
}
