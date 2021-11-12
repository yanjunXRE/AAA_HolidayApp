import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router) {
    this.myForm = formBuilder.group({
    'consumertype': '',
    'name': '',
    'email': '',
    'mobile': '',
    'address': '',
    'feedback': ''
    });
    }
   summary() {
    let navigationExtras: NavigationExtras = { queryParams: {name: this.myForm.value.name } };
    this.router.navigate(['thanks'], navigationExtras);
    }

  ngOnInit() {
  }

}
