import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AccuielComponent } from './components/public/accuiel/accuiel.component';
import { AddclientComponent } from './components/clients/addclient/addclient.component';
import { EditclientComponent } from './components/clients/editclient/editclient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddorchestreComponent } from './components/orchestres/addorchestre/addorchestre.component';
import { EditorchestreComponent } from './components/orchestres/editorchestre/editorchestre.component';
import { SidenavComponent } from './components/navbar/sidenav/sidenav.component';
import { EditreservationComponent } from './components/reservations/editreservation/editreservation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavModule } from 'angular-ng-sidenav';

//I keep the new line
import { MaterialExampleModule } from '../material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ToastrModule } from 'ngx-toastr';
import { AddpackageComponent } from './components/packages/addpackage/addpackage.component';
import { EditpackageComponent } from './components/packages/editpackage/editpackage.component';
import { AddfetetypeComponent } from './components/fetetypes/addfetetype/addfetetype.component';
import { EditfetetypeComponent } from './components/fetetypes/editfetetype/editfetetype.component';
import { FormComponent } from './login/form/form.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleryComponent } from './components/galery/galery.component';
import { SliderComponent } from './components/slider/slider.component';
import { TitleComponent } from './components/title/title.component';
import { NavbarComponent } from './components/navbar copy/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AnivComponent } from './res/aniv/aniv.component';
import { HttpClient } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { ReserveComponent } from './res/aniv/reserve/reserve.component';
import { BasicComponent } from './res/aniv/reserve/basic/basic.component';
import { ProComponent } from './res/aniv/reserve/pro/pro.component';
import { FactureComponent } from './res/aniv/facture/facture.component';
import { jsPDF } from "jspdf";
import { AProposComponent } from './info/apropos/apropos.component';
import { ProposComponent } from './propos/propos.component';
import { RegComponent } from './login/reg/reg.component';
import { TraiteurComponent } from './login/traiteur/traiteur.component';
import { IgxBadgeModule, IgxButtonModule, IgxCardModule, IgxCheckboxModule, IgxIconModule, IgxInputGroupModule, IgxMaskModule, IgxRadioModule, IgxSelectModule, IgxStepperModule } from 'igniteui-angular';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    OrchestresComponent,
    TraiteursComponent,
    SallesComponent,
    CameramansComponent,
    TartesComponent,
    ZianasComponent,
    VoituresComponent,
    HotelsComponent,
    LebsasComponent,
    ClientsComponent,
    FetetypesComponent,
    PackagesComponent,
    MariagesComponent,
    AnniversairesComponent,
    FeteDeNaissancesComponent,
    FunerairesComponent,
    DinersComponent,
    PackBasicsComponent,
    AdnavbarComponent,
    ReservationsComponent,
    AddclientComponent,
    EditclientComponent,
    AddorchestreComponent,
    EditorchestreComponent,
    SidenavComponent,
    SidebarComponent,
    EditreservationComponent,
    AddpackageComponent,
    EditpackageComponent,
    AddfetetypeComponent,
    EditfetetypeComponent,
    FormComponent,
    NavbarComponent,
    SliderComponent,
    BodyComponent,
    TitleComponent,
    FooterComponent,
    GaleryComponent,
    AnivComponent,
    ReserveComponent,
    BasicComponent,
    ProComponent,
    FactureComponent,
    AProposComponent,
    ProposComponent,
    RegComponent,
    TraiteurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    SidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule, MatStepperModule, MatInputModule, MatButtonModule, BrowserAnimationsModule,
    IgxStepperModule,
	  IgxMaskModule,
	  IgxInputGroupModule,
	  IgxButtonModule,
	  IgxRadioModule,
	  IgxCardModule,
	  IgxCheckboxModule,
	  IgxSelectModule,
	  IgxIconModule,
	  IgxBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
