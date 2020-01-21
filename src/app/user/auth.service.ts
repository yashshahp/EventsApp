import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { pipe, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:IUser;
  constructor(private http:HttpClient) { }

  loginUser(userName,password){

    let loginInfo = {username:userName, password:password};
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post('/api/login', loginInfo, options)
    .pipe(tap(data =>{
      this.currentUser = <IUser>data['user'];
    }))
    .pipe(catchError(err =>{
      return of(false)
    })) 
    // this.currentUser={
    //   id:1,
    //   userName: userName,
    //   firstName: 'Yash',
    //   lastName: 'Shah'
    // }    
  }

  isAuth(){
    return !!this.currentUser;
  }
  updateCurrentUser(fname:string,lname:string){
    this.currentUser.firstName=fname;
    this.currentUser.lastName=lname;

    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

   return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
  }
  checkAuthenticationStatus(){
    this.http.get('/api/currentIdentity')
    .pipe(tap(data=>{
      if(data instanceof Object){
        this.currentUser = <IUser>data;
      }
    }))
    .subscribe();
  }
  logout(){
    this.currentUser=undefined;
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post('/api/logout',{},options);
  }
}
