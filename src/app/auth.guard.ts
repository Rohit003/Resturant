import {CanActivate,Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
constructor(private route: Router){}

    canActivate(){
        if(!localStorage.getItem('token')){
this.route.navigate(['/userlogin']);
return false;

        }

        return true;
    };
}