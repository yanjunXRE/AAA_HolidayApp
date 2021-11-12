import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';
;
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
email:String;
count:number;
  constructor(private menuController: MenuController,private authService: AuthService,private activatedRoute: ActivatedRoute) {
    
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.name!=undefined &&params.name!='guest'){
      sessionStorage.setItem('user', params.name);
      
      
    }
    if( sessionStorage.getItem('user')!=undefined){
      this.email=sessionStorage.getItem('user')
    }else{
      this.email="guest"
    }
      });
    console.log("trigger"+this.count)
  }
  close() {
    this.menuController.close("main");
    }
}
