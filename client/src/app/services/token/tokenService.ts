import { Injectable } from '@angular/core';
// import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor() { }

  public saveToken(token: string): void {
    window.localStorage.setItem('token', token);
  }

  public getToken(): string {

    // @ts-ignore
    return window.localStorage.getItem('token').toString();
  }

  public deleteToken(): void {
    window.localStorage.removeItem('token');
  }
  // public extractsAuthorities():string{
  //   // return window.localStorage.getItem('token').
  //   const decodedToken = this.jwtHelper.decodeToken("token");
  //   // const authorities = decodedToken.authorities;
  //   return decodedToken.authorities;
  // }
}
