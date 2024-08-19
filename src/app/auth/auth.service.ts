import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(usuario: string, password: string){
    sessionStorage.setItem("isLogin", "true")
  }

  logout(){
    sessionStorage.clear()
  }

  isLogin():boolean{
    return !!sessionStorage.getItem("isLogin")
  }

}
