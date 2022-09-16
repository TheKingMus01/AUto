import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokensService {
  token: any;
  constructor() { 
    this.tokentest();
    console.log(this.tokentest());}
  tokentest(){
    this.token=localStorage.getItem('token');
    if (this.token == null){
      
     return false;
    }else{
      return true;
    }}
}
