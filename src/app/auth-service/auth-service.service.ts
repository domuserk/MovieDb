import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //loginAuth = new Subject<any>()
  loginAuth: any;
  constructor(
    private router: Router,
    private http: HttpClient) { }

  async verifyUser(emailOrUsername, password) {
    try {
      const params = { emailOrUsername, password}
      const userVerify = await this.http.get(`http://localhost:3000/user/sign`, {
        params: params
      }).toPromise()
    
       this.router.navigate(['home-streaming']);
      return userVerify;
    } catch(err) {
      alert('email ou senha incorretos')
    }
    
  }

  async authenticateUser(emailOrUsername, password) {
    try {
      this.http.post('http://localhost:3000/user/authenticate',{
        emailOrUsername, 
        password
      }).subscribe(
        result => {
          console.log(result);
        },
        err => {
          if(err.status == 400) {
            console.log(err);
          }
        }
    );
    }catch(err) {
      alert('email ou senha incorretos')
    }
    
  }

  
  async createUser(name, email, password, username, age) {
    try {
      this.http.post('http://localhost:3000/user/sign-up',{
        name,
        email,
        password,
        username,
        age,
      }).subscribe(
        result => {
          result;
        },
        err => {
          if(err.status == 400) {
            console.log(err);
          }
        }
    );
    }catch(err) {
      console.log(err)
    }
  }
}
