import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router ) {
    this.myForm = formBuilder.group({
    //'username': '',
    'email':'',
    'password': ''
    
    });
    }
    
    login() {
      this.authService.login(this.myForm.value.email, this.myForm.value.password);
 

      }
     
      forgot() {
        this.authService.forgotPassword(this.myForm.value.email);
        
        }

  ngOnInit() {
  }

}
