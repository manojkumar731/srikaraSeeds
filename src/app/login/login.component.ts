import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({})
  isFrgtPswd: boolean = false;
  errMsg: any;
  isError: boolean;

  constructor(private fb: FormBuilder, private loginService: LoginService, public router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  frgtPswd() {
    this.isFrgtPswd = true;
    this.loginForm.get('password').disable()
    this.loginForm.get('password').setValue('')
  }

  onCancel() {
    this.isFrgtPswd = false;
    this.loginForm.get('password').enable()
    this.loginForm.get('password').setValue('')
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(res => {
        if (res?.message === 'authenticated successfully') {
          this.isError = false;
          localStorage.setItem('token', res?.token)
          if (localStorage.getItem('products')) {
            this.router.navigateByUrl("/addCart");
          } else {
            this.router.navigateByUrl("/product");
          }
        }else if(res?.message === 'username is not found, Please register if new user'){
          this.isError = true;
          this.errMsg = "Username is not found, Please register if new user"
        } else {
          this.isError = true;
          this.errMsg = "Username/Password is not correct"
        }
      }, err => {
        this.errMsg = "Oops something went wrong please try again later"
        console.log('Error::>', err)
      })
    }
  }

  closeErr() {
    this.isError = false;
  }
}
