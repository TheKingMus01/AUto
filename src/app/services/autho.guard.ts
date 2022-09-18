import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokensService } from './tokens.service';

@Injectable({
  providedIn: 'root'
})

export class AuthoGuard implements CanActivate {
  constructor(private token:TokensService,private router:Router)
  {  }
  currenttoken: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) => {
        this.currenttoken =this.token.tokentest();
        console.log(this.currenttoken);
        
          if(this.currenttoken==true){
            resolve(true);
          }else{
            this.router.navigate(['/'])
            reject(true);
          }
        
        
      })
      
      }  }
  

