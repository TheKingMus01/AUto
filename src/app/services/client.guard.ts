import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  client : any;
  clienttest(){
    this.client=localStorage.getItem('client');
    if (this.client == null){
     return false;
    }else{
      return true;
    }}
    constructor(private router:Router)
    {  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //return true;
    return new Promise((resolve, reject) => {
      this.client =this.clienttest();
      
      console.log(this.client);
      
        if(this.client==true){
          resolve(true);
        }else{
          this.router.navigate(['/']);
          reject(true);
        }
      
      
    })
    
    }
  }
  
