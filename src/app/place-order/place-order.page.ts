import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['./place-order.page.scss'],
})
export class PlaceOrderPage{

  myForm: FormGroup;
  selected:any=[];
  constructor(private emailComposer: EmailComposer,private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private router: Router,  private toastController: ToastController,private userService:UserService) {
    this.myForm = this.formBuilder.group({
      'consumertype': '',
      'name': '',
      'email': '',
      'mobile': '',
      'address': '',
      'feedback': ''
      });
    }
   summary2() {
   
    for (let selected of this.selected){
    if(selected.user==sessionStorage.getItem('user')|| sessionStorage.getItem('user')==null){
      if(selected.user==sessionStorage.getItem('user')){
    this.userService.addOrder(selected.attraction,selected.des,
      selected.image_url,selected.image_url,selected.price,selected.quant,selected.latitude,selected.longitude,selected.user)
    }
   
    console.log(selected.id)
      this.userService.deleteAtt(selected.id);
    }
    let email = {
      to: selected.user,
     
      subject: 'Order received',
      body: 'You havce purchase the following',
      isHtml: true
    }
    
    // Send a text message using default options
    this.emailComposer.open(email);
   
  }

    this.router.navigate(['home']);
    const toast = this.toastController.create({
      message: 'Payment Success',
      duration: 3000,
      position: 'bottom'
      
      }).then(alert => alert.present());
    
    }


  ionViewWillEnter() {
    this.userService.getAllCart().subscribe((data) => {this.selected = data;});  
  }

}
