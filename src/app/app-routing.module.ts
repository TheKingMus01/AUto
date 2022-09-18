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
import { AuthoGuard } from './services/autho.guard';
import { ClientGuard } from './services/client.guard';
import { LogGuard } from './services/log.guard';

const routes: Routes = [
{ path: 'admin',canActivate:[AuthoGuard], component:ReservationsComponent},
{ path: 'admin/Reservation/:id',canActivate:[AuthoGuard], component:EditreservationComponent},
{ path: '', component:BodyComponent},
{ path: 'cnx',canActivate:[LogGuard], component:FormComponent},
{ path: 'admin/clients',canActivate:[AuthoGuard], component:ClientsComponent},
{ path: 'admin/client/add',canActivate:[AuthoGuard], component:AddclientComponent},
{ path: 'admin/client/:id',canActivate:[AuthoGuard], component:EditclientComponent},
{ path: 'admin/orchestres',canActivate:[AuthoGuard], component: OrchestresComponent},
{ path: 'admin/orchestre/add',canActivate:[AuthoGuard], component:AddorchestreComponent},
{ path: 'admin/orchestre/:id',canActivate:[AuthoGuard], component:EditorchestreComponent},
{ path: 'admin/packages',canActivate:[AuthoGuard], component: PackagesComponent},
{ path: 'admin/package/add',canActivate:[AuthoGuard], component:AddpackageComponent},
{ path: 'admin/package/:id',canActivate:[AuthoGuard], component:EditpackageComponent},
{ path: 'admin/fetetypes',canActivate:[AuthoGuard], component: FetetypesComponent},
{ path: 'admin/fetetype/add',canActivate:[AuthoGuard], component:AddfetetypeComponent},
{ path: 'admin/fetetype/:id',canActivate:[AuthoGuard], component:EditfetetypeComponent},
{ path: 'aniv/reserve', component: AnivComponent},
{ path: 'aniv/reserve/a',canActivate:[ClientGuard], component: ReserveComponent},
{ path: 'aniv/reserve/a/basic',canActivate:[ClientGuard], component: BasicComponent},
{ path: 'aniv/reserve/a/prum',canActivate:[ClientGuard], component: ProComponent},
{ path: 'aniv/reserve/facture',canActivate:[ClientGuard], component: FactureComponent},
{ path: 'info', component: AProposComponent},
{ path: 'admin/anivs',canActivate:[AuthoGuard], component: AnniversairesComponent},
{ path: 'admin/aniv/add',canActivate:[AuthoGuard], component:AddpackageComponent},
{ path: 'admin/aniv/:id',canActivate:[AuthoGuard], component:EditpackageComponent},
{ path: 'admin/mariages',canActivate:[AuthoGuard], component: MariagesComponent},
{ path: 'admin/mariage/add',canActivate:[AuthoGuard], component:MariagesComponent},
{ path: 'admin/mariage/:id',canActivate:[AuthoGuard], component:MariagesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

