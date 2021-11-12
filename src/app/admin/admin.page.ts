import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UserService } from '../user.service';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  att:any=[];
  banner:any=[];
  constructor( private router: Router, private alertController: AlertController,private activatedRoute: ActivatedRoute,private ActivatedRoute:ActivatedRoute,private userService: UserService) { 
  }
  ngOnInit() {
  }
ionViewWillEnter(){
  this.userService.getAttData().subscribe((data) => {this.att = data;});
  this.userService.getBanner().subscribe((data) => {this.banner = data;
    });
  

}
openSys2(id,imgUrl,url,title){
  const alert = this.alertController.create({
    header: 'Edit Banner:',
    inputs: [{name: 'imageUrl',type: 'text' ,placeholder:'imageUrl',value:imgUrl},
    {name: 'url',type: 'text',placeholder:'url',value:url},
    {name: 'title',type: 'text',placeholder:'title',value:title}],
    buttons: [
    {text: 'Cancel', role: 'cancel'},
    {text: 'Ok',
    handler: (alertData) => { //takes the data
    if(id!=undefined){
        this.userService.updateBanner(id,alertData.imageUrl,alertData.url,alertData.title);
    }else{
      this.userService.addBanner(alertData.imageUrl,alertData.url,alertData.title);
    }
        
       
      
      }
    },
    
    {text: 'Delete',
    handler: (alertData) => { this.userService.deleteBanner(id) }
  }
    ]}).then(alert => alert.present());
}
}
