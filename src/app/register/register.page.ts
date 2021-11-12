import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    this.myForm = formBuilder.group({
    //'username': '',
    'email':'',
    'password': ''
    
    });
    }
    
     
      register() {
      this.authService.register(this.myForm.value.email, this.myForm.value.password);
     
      }

  ngOnInit() {
  }

}
