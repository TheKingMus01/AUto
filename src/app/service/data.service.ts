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
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data);
  }

  Add(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data);
  }
  getDataReservation(){
    return this.httpClient.get('http://127.0.0.1:8000/api/reservations');
  }
  deleteReservationsData(id: any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteReservation/'+id)
  }
  getReservationsById(id: any){
      return this.httpClient.get('http://127.0.0.1:8000/api/Reservation/'+id)
  }
  updateReservationsData(id:any,data:Reservation){
          return this.httpClient.put('http://127.0.0.1:8000/api/updateReservation/'+id,data)
  }

  getDataClient(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clients');
  }

  inserClientsData(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addClient',data)
  }
  deleteClientsData(id: any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteClient/'+id)
  }
  getClientsById(id: any){
      return this.httpClient.get('http://127.0.0.1:8000/api/Client/'+id)
  }
  updateClientsData(id:any,data:Client){
          return this.httpClient.put('http://127.0.0.1:8000/api/updateClient/'+id,data)
  }

  getDataOrchestre(){
    return this.httpClient.get('http://127.0.0.1:8000/api/orchestres');
  }

  inserOrchestresData(data: any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addOrchestre',data)
  }
  deleteOrchestresData(id: any){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteOrchestre/'+id)
  }
  getOrchestresById(id: any){
      return this.httpClient.get('http://127.0.0.1:8000/api/Orchestre/'+id)
  }
  updateOrchestresData(id:any,data:Orchestre){
          return this.httpClient.put('http://127.0.0.1:8000/api/updateOrchestre/'+id,data)
  }

  uploadDataOr(data: any){
    const headers = new HttpHeaders();
    
    }

    getDataPackage(){
      return this.httpClient.get('http://127.0.0.1:8000/api/packages');
    }

    inserPackagesData(data: any){
      return this.httpClient.post('http://127.0.0.1:8000/api/addPackage',data)
    }
    deletePackagesData(id: any){
      return this.httpClient.delete('http://127.0.0.1:8000/api/deletePackage/'+id)
    }
    getPackagesById(id: any){
        return this.httpClient.get('http://127.0.0.1:8000/api/Package/'+id)
    }
    updatePackagesData(id:any,data:Package){
            return this.httpClient.put('http://127.0.0.1:8000/api/updatePackage/'+id,data)
    }

    getDataFetetype(){
      return this.httpClient.get('http://127.0.0.1:8000/api/fetetypes');
    }

    inserFetetypesData(data: any){
      return this.httpClient.post('http://127.0.0.1:8000/api/addFetetype',data)
    }
    deleteFetetypesData(id: any){
      return this.httpClient.delete('http://127.0.0.1:8000/api/deleteFetetype/'+id)
    }
    getFetetypesById(id: any){
        return this.httpClient.get('http://127.0.0.1:8000/api/Fetetype/'+id)
    }
    updateFetetypesData(id:any,data:Fetetype){
            return this.httpClient.put('http://127.0.0.1:8000/api/updateFetetype/'+id,data)
    }

    inserAnniData(data: any){
      return this.httpClient.post('http://127.0.0.1:8000/api/addAnniversaire',data)
    }
    lastres(){
      return this.httpClient.get('http://127.0.0.1:8000/api/last/res')
    }
    lastclient(){
      return this.httpClient.get('http://127.0.0.1:8000/api/last/cli')
    }
    lastaniv(){
      return this.httpClient.get('http://127.0.0.1:8000/api/last/aniv')
    }
    insertBasicAniv(){
      return this.httpClient.get('http://127.0.0.1:8000/api/last/basicreservaniv')
    }
    insertProAniv(){
      return this.httpClient.get('http://127.0.0.1:8000/api/last/proreservaniv')
    }
    lastpack(){
      return this.httpClient.get('http://127.0.0.1:8000/api/last/pack')
    }
//---------------------------------------------------------------------------------------
    getDataAnivers(){
      return this.httpClient.get('http://127.0.0.1:8000/api/anniversaires');
    }

    inserAniverssData(data: any){
      return this.httpClient.post('http://127.0.0.1:8000/api/addAnniversaire',data)
    }
    deleteAniverssData(id: any){
      return this.httpClient.delete('http://127.0.0.1:8000/api/deleteAnniversaire/'+id)
    }
    getAniverssById(id: any){
        return this.httpClient.get('http://127.0.0.1:8000/api/Anniversaire/'+id)
    }
    updateAniverssData(id:any,data:any){
            return this.httpClient.put('http://127.0.0.1:8000/api/updateAnniversaire/'+id,data)
    }
    //----------------------------------------------------------------------------------------------
    getrole(){
      return this.httpClient.get('http://127.0.0.1:8000/api/getrole');
    }

  }
