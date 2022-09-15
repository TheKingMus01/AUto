import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccuielComponent } from './components/public/accuiel/accuiel.component';
import { OrchestresComponent } from './components/orchestres/orchestres.component';
import { TraiteursComponent } from './components/traiteurs/traiteurs.component';
import { SallesComponent } from './components/salles/salles.component';
import { CameramansComponent } from './components/cameramans/cameramans.component';
import { TartesComponent } from './components/tartes/tartes.component';
import { ZianasComponent } from './components/zianas/zianas.component';
import { VoituresComponent } from './components/voitures/voitures.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { LebsasComponent } from './components/lebsas/lebsas.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FetetypesComponent } from './components/fetetypes/fetetypes.component';
import { PackagesComponent } from './components/packages/packages.component';
import { MariagesComponent } from './components/mariages/mariages.component';
import { AnniversairesComponent } from './components/anniversaires/anniversaires.component';
import { FeteDeNaissancesComponent } from './components/fete-de-naissances/fete-de-naissances.component';
import { FunerairesComponent } from './components/funeraires/funeraires.component';
import { DinersComponent } from './components/diners/diners.component';
import { PackBasicsComponent } from './components/pack-basics/pack-basics.component';
import { AdnavbarComponent } from './components/navbar/adnavbar/adnavbar.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AddclientComponent } from './components/clients/addclient/addclient.component';
import { EditclientComponent } from './components/clients/editclient/editclient.component';
import { AddorchestreComponent } from './components/orchestres/addorchestre/addorchestre.component';
import { EditorchestreComponent } from './components/orchestres/editorchestre/editorchestre.component';
import { AddpackageComponent } from './components/packages/addpackage/addpackage.component';
import { EditpackageComponent } from './components/packages/editpackage/editpackage.component';
import { AddfetetypeComponent } from './components/fetetypes/addfetetype/addfetetype.component';
import { EditfetetypeComponent } from './components/fetetypes/editfetetype/editfetetype.component';
import { FormComponent } from './login/form/form.component';
import { EditreservationComponent } from './components/reservations/editreservation/editreservation.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleryComponent } from './components/galery/galery.component';
import { SliderComponent } from './components/slider/slider.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar copy/navbar.component';
import { AnivComponent } from './res/aniv/aniv.component';
import { ReserveComponent } from './res/aniv/reserve/reserve.component';
import { BasicComponent } from './res/aniv/reserve/basic/basic.component';
import { ProComponent } from './res/aniv/reserve/pro/pro.component';
import { FactureComponent } from './res/aniv/facture/facture.component';
import { AProposComponent } from './info/apropos/apropos.component';

const routes: Routes = [
{ path: 'admin', component:ReservationsComponent},
{ path: 'admin/Reservation/:id', component:EditreservationComponent},
{ path: '', component:BodyComponent},
{ path: 'login', component:FormComponent},
{ path: 'admin/clients', component:ClientsComponent},
{ path: 'admin/client/add', component:AddclientComponent},
{ path: 'admin/client/:id', component:EditclientComponent},
{ path: 'admin/orchestres', component: OrchestresComponent},
{ path: 'admin/orchestre/add', component:AddorchestreComponent},
{ path: 'admin/orchestre/:id', component:EditorchestreComponent},
{ path: 'admin/packages', component: PackagesComponent},
{ path: 'admin/package/add', component:AddpackageComponent},
{ path: 'admin/package/:id', component:EditpackageComponent},
{ path: 'admin/fetetypes', component: FetetypesComponent},
{ path: 'admin/fetetype/add', component:AddfetetypeComponent},
{ path: 'admin/fetetype/:id', component:EditfetetypeComponent},
{ path: 'aniv/reserve', component: AnivComponent},
{ path: 'aniv/reserve/a', component: ReserveComponent},
{ path: 'aniv/reserve/a/basic', component: BasicComponent},
{ path: 'aniv/reserve/a/prum', component: ProComponent},
{ path: 'aniv/reserve/facture', component: FactureComponent},
{ path: 'info', component: AProposComponent},
{ path: 'admin/anivs', component: AnniversairesComponent},
{ path: 'admin/aniv/add', component:AddpackageComponent},
{ path: 'admin/aniv/:id', component:EditpackageComponent},
{ path: 'admin/mariages', component: MariagesComponent},
{ path: 'admin/mariage/add', component:MariagesComponent},
{ path: 'admin/mariage/:id', component:MariagesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
