import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router,NavigationExtras } from '@angular/router';
import { isNgTemplate } from '@angular/compiler';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
idParam=[]
  att:any=[];
  total:number;
  email;
  constructor(private activatedRoute: ActivatedRoute,private ActivatedRoute:ActivatedRoute,private userService: UserService,private Router:Router,private AlertController:AlertController) { 
 
    
     
      
      
   
    // subscribe allows the data to be fetched whenever there is any changes to the data


  }
  placeOrder(){
  
    
      this.Router.navigate(['place-order']);
  }
  
  ionViewWillEnter(){
    this.email= sessionStorage.getItem("user");
     
    if(this.email==undefined){
        this.email='guest'
    }
      this.userService.getAllCart().subscribe((data) => {this.att = data;

        console.log(this.att);
        this.total=0
      for (let i of this.att){
        if(i.user==this.email){
        console.log(i);
        console.log(i.quant)
        console.log(i.price)
      this.total+=(i.quant*i.price)
      console.log(this.total)
    
      
        }
        
      }
      }
       );
  }
  edit(id) {
    const alert = this.AlertController.create({
    header: 'Edit Quantity:',
    inputs: [{name: 'quant',type: 'number'}],
    buttons: [
    {text: 'Cancel', role: 'cancel'},
    {text: 'Ok',
    handler: (alertData) => { //takes the data
    console.log(alertData.quant)
    console.log(id)
        this.userService.updateAtt(id,alertData.quant);
    
        
       
      
      }
    }
    ]}).then(alert => alert.present());
    }
    delete(id) {
      this.userService.deleteAtt(id);
     }
}
