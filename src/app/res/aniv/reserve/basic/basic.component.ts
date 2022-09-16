import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Aniv } from 'src/app/class/aniv';
import { Res } from 'src/app/class/res';
import { Clienttid } from 'src/app/class/clienttid';

import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from 'src/app/service/data.service';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { IgxStepperComponent } from 'igniteui-angular';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @ViewChild('stepper', { static: true })
  public stepper: IgxStepperComponent;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  sixFormGroup: FormGroup;
  aniv = new Aniv();
  anivs:any;
  orc_id:any;
  id2:any;
  id3:any;
  id4:any;
  id5:any;
  id6:any;
  constructor(private cdr: ChangeDetectorRef,private _formBuilder: FormBuilder, private route:ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required],
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required],
    });
    this.fiveFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required],
    });
    this.sixFormGroup = this._formBuilder.group({
      sixthCtrl: ['', Validators.required],
    });

  }
  insertanniv(){

    this.aniv.id_orchestre=this.orc_id ;
    this.aniv.id_traiteure=this.id2;
    this.aniv.id_salle= this.id3;
    this.aniv.id_cameramen= this.id4;
    this.aniv.id_tartes= this.id5;
    this.aniv.id_lebsa= this.id6;
    this.dataService.inserAnniData(this.aniv).subscribe(res=>{
        console.log(res);

      //this.router.navigate(['/aniv/reserve/a']);
      })
    }
    public selectedCard: any;
    public selectedCard1: any;
    public selectedCard2: any;
    public selectedCard3: any;
    public selectedCard4: any;
    public selectedCard5: any;

    resan(){
      this.dataService.insertBasicAniv().subscribe(res=>{

         console.log(res);
             this.router.navigate(['/aniv/reserve/facture']);

        })
      }
      public cards1: any[] = [
        {id:1,
          img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Orchestre/Basic/11.jpg"
        },
        {
          id:2,
          img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Orchestre/Basic/22.jpg"
        },
        {id:3,
          img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Orchestre/Basic/33.jpg"
        },
        {id:4,
          img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Orchestre/Basic/44.jpg"
        }
    ];
    public cards2: any[] = [
      {id:1,
        img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Traiteur/Basic/11.jpg"
      },
      {
        id:2,
        img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Traiteur/Basic/22.jpg"
      },
      {id:3,
        img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Traiteur/Basic/33.jpg"
      },
      {id:4,
        img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Traiteur/Basic/44.jpg"
      }
  ];
  public cards3: any[] = [
    {id:1,
      img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Salle/Basic/11.jpg"
    },
    {
      id:2,
      img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Salle/Basic/22.jpg"
    },
    {id:3,
      img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Salle/Basic/33.jpg"
    },
    {id:4,
      img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Salle/Basic/44.jpg"
    }
];
public cards4: any[] = [
  {id:1,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/CameraMan/Basic/11.jpg"
  },
  {
    id:2,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/CameraMan/Basic/22.jpg"
  },
  {id:3,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/CameraMan/Basic/33.jpg"
  },
  {id:4,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/CameraMan/Basic/44.jpg"
  }
];
public cards5: any[] = [
  {id:1,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Tarte/Basic/11.jpg"
  },
  {
    id:2,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Tarte/Basic/22.jpg"
  },
  {id:3,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Tarte/Basic/33.jpg"
  },
  {id:4,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Tarte/Basic/44.jpg"
  }
];
public cards6: any[] = [
  {id:1,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Lebsa/Basic/11.jpg"
  },
  {
    id:2,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Lebsa/Basic/22.jpg"
  },
  {id:3,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Lebsa/Basic/33.jpg"
  },
  {id:4,
    img:"../../../../../assets/Hafalat/Hafalat/RÉSERVER/Lebsa/Basic/44.jpg"
  }
];
    public selectCard0(card: any): void {
      this.selectedCard = card;
      this.cdr.detectChanges();
      this.stepper.next();
      this.orc_id=card.id;
      console.log(this.selectedCard.id);
  }
  public selectCard1(card: any): void {
    this.selectedCard1 = card;
    this.cdr.detectChanges();
    this.stepper.next();
    this.id2=card.id;
    console.log(this.selectedCard1.id);
}
public selectCard2(card: any): void {
  this.selectedCard2 = card;
  this.cdr.detectChanges();
  this.stepper.next();
  this.id3=card.id;
  console.log(this.selectedCard2.id);
}
public selectCard3(card: any): void {
  this.selectedCard3 = card;
  this.cdr.detectChanges();
  this.stepper.next();
  this.id4=card.id;
  console.log(this.selectedCard3.id);
}
public selectCard4(card: any): void {
  this.selectedCard4 = card;
  this.cdr.detectChanges();
  this.stepper.next();
  this.id5=card.id;
  console.log(this.selectedCard4.id);
}
public selectCard5(card: any): void {
  this.selectedCard5 = card;
  this.cdr.detectChanges();
  this.id6=card.id;
  console.log(this.selectedCard5.id);
}
public revoke(){
  
}
}
