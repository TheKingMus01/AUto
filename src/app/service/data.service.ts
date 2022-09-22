import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Client } from '../class/client';
import { Orchestre } from '../class/orchestre';
import { Reservation } from '../class/reservation';

import { environment} from '../../environments/environment';
import { Package } from '../class/package';
import { Fetetype } from '../class/fetetype';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
  getDatalogin(data: any){
    return this.httpClient.post('https://backendlarav.herokuapp.com/api/login',data);
  }

  Add(data: any){
    return this.httpClient.post('https://backendlarav.herokuapp.com/api/login',data);
  }
  getDataReservation(){
    return this.httpClient.get('https://backendlarav.herokuapp.com/api/reservations');
  }
  deleteReservationsData(id: any){
    return this.httpClient.delete('https://backendlarav.herokuapp.com/api/deleteReservation/'+id)
  }
  getReservationsById(id: any){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/Reservation/'+id)
  }
  updateReservationsData(id:any,data:Reservation){
          return this.httpClient.put('https://backendlarav.herokuapp.com/api/updateReservation/'+id,data)
  }

  getDataClient(){
    return this.httpClient.get('https://backendlarav.herokuapp.com/api/clients');
  }

  inserClientsData(data: any){
    return this.httpClient.post('https://backendlarav.herokuapp.com/api/addClient',data)
  }
  deleteClientsData(id: any){
    return this.httpClient.delete('https://backendlarav.herokuapp.com/api/deleteClient/'+id)
  }
  getClientsById(id: any){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/Client/'+id)
  }
  updateClientsData(id:any,data:Client){
          return this.httpClient.put('https://backendlarav.herokuapp.com/api/updateClient/'+id,data)
  }

  getDataOrchestre(){
    return this.httpClient.get('https://backendlarav.herokuapp.com/api/orchestres');
  }
  get_basic_Orchestre(){
    return this.httpClient.get('https://backendlarav.herokuapp.com/api/basic_orc');
  }

  inserOrchestresData(data: any){
    return this.httpClient.post('https://backendlarav.herokuapp.com/api/addOrchestre',data)
  }
  deleteOrchestresData(id: any){
    return this.httpClient.delete('https://backendlarav.herokuapp.com/api/deleteOrchestre/'+id)
  }
  getOrchestresById(id: any){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/Orchestre/'+id)
  }
  updateOrchestresData(id:any,data:Orchestre){
          return this.httpClient.put('https://backendlarav.herokuapp.com/api/updateOrchestre/'+id,data)
  }

  uploadDataOr(data: any){
    const headers = new HttpHeaders();
    
    }

    getDataPackage(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/packages');
    }

    inserPackagesData(data: any){
      return this.httpClient.post('https://backendlarav.herokuapp.com/api/addPackage',data)
    }
    deletePackagesData(id: any){
      return this.httpClient.delete('https://backendlarav.herokuapp.com/api/deletePackage/'+id)
    }
    getPackagesById(id: any){
        return this.httpClient.get('https://backendlarav.herokuapp.com/api/Package/'+id)
    }
    updatePackagesData(id:any,data:Package){
            return this.httpClient.put('https://backendlarav.herokuapp.com/api/updatePackage/'+id,data)
    }

    getDataFetetype(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/fetetypes');
    }

    inserFetetypesData(data: any){
      return this.httpClient.post('https://backendlarav.herokuapp.com/api/addFetetype',data)
    }
    deleteFetetypesData(id: any){
      return this.httpClient.delete('https://backendlarav.herokuapp.com/api/deleteFetetype/'+id)
    }
    getFetetypesById(id: any){
        return this.httpClient.get('https://backendlarav.herokuapp.com/api/Fetetype/'+id)
    }
    updateFetetypesData(id:any,data:Fetetype){
            return this.httpClient.put('https://backendlarav.herokuapp.com/api/updateFetetype/'+id,data)
    }

    inserAnniData(data: any){
      return this.httpClient.post('https://backendlarav.herokuapp.com/api/addAnniversaire',data)
    }
    lastres(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/last/res')
    }
    lastclient(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/last/cli')
    }
    lastaniv(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/last/aniv')
    }
    insertBasicAniv(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/last/basicreservaniv')
    }
    insertProAniv(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/last/proreservaniv')
    }
    lastpack(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/last/pack')
    }
//---------------------------------------------------------------------------------------
    getDataAnivers(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/anniversaires');
    }

    inserAniverssData(data: any){
      return this.httpClient.post('https://backendlarav.herokuapp.com/api/addAnniversaire',data)
    }
    deleteAniverssData(id: any){
      return this.httpClient.delete('https://backendlarav.herokuapp.com/api/deleteAnniversaire/'+id)
    }
    getAniverssById(id: any){
        return this.httpClient.get('https://backendlarav.herokuapp.com/api/Anniversaire/'+id)
    }
    updateAniverssData(id:any,data:any){
            return this.httpClient.put('https://backendlarav.herokuapp.com/api/updateAnniversaire/'+id,data)
    }
    //----------------------------------------------------------------------------------------------
    getrole(){
      return this.httpClient.get('https://backendlarav.herokuapp.com/api/getrole');
    }

  }
