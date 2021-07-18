import { AuthServiceService } from './../auth-service/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({})
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder
  ) { }



  ngOnInit(): void {
   this.loginForm = this.formBuilder.group ({
      emailOrUsername: [''],
      password: ['']
    })

    this.registerForm = this.formBuilder.group ({
      name: [''],
      email: [''],
      password: [''],
      username:[''] ,
      age: ['']
    })
  
   this.pageEffects()

  }

  async RegisterAccount() {
    try {
      const name = this.registerForm.get('name').value;
      const email = this.registerForm.get('email').value;
      const password = this.registerForm.get('password').value;
      const username = this.registerForm.get('username').value;
      const age = this.registerForm.get('age').value;
      console.log('aqui')
      await this.authService.createUser(name, email, password, username, age)
    }catch (e) {
      console.log(e)
    }
    return;
  }
  
  async getLoginAccount() {
    try {
      const email = this.loginForm.get('emailOrUsername').value;
      const password =  this.loginForm.get('password').value;
      const user = await this.authService.verifyUser(email, password)
    }catch (e) {
      console.log(e)
    }
    return;
  }

  pageEffects() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }
}
