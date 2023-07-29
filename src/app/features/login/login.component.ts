import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  ngOnInit(){
    console.warn("login component loaded");
  }
  loginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
    remember: new FormControl(null)
  })
  onSubmit(){
    console.log(this.loginForm);
  }
}
