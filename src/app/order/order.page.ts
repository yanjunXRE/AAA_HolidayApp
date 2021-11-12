import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router , NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage  {
  filterAtt:any=[]
  user:string;
  constructor(private router:Router,private userService: UserService) { }

  ionViewWillEnter()  {
  
    this.userService.viewOrder().subscribe((data) => {this.filterAtt = data;
      console.log(this.filterAtt)
      this.user=sessionStorage.getItem('user');});
   
  }

}
