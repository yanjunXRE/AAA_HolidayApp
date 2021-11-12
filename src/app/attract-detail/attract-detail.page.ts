import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ChangeDetectorRef } from "@angular/core";
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router , NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
declare var google;
@Component({
  selector: 'app-attract-detail',
  templateUrl: './attract-detail.page.html',
  styleUrls: ['./attract-detail.page.scss'],
})
export class AttractDetailPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  date: string;

  type: 'string';
  latitude: number;
  longitude: number;
  selected: any = {};
  quant=1;
  infoWindows:any=""
  user:string;
  public myDate;
  public myTime;
 today:any;
  // markers:any={
  //   title:"AAA"
  //   ,latitude:"1.284859"
  //   ,longitude:"103.861011"}
  private markers = [];
  constructor(private toastController: ToastController,private cdr: ChangeDetectorRef,private activatedRoute: ActivatedRoute, private attService: UserService, private router: Router ,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    // Get the name that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
  // Get the information of the country from the API
  this.attService.getOneAtt(id).subscribe(result => {
  this.selected = result;
  console.log(result)
  this.loadMap('roadmap');
  //this.markMap();
  if(sessionStorage.getItem('user') ==undefined){
    this.user='guest'
  }else{
    this.user=sessionStorage.getItem('user')
  }
  });
  this.today=Date.now();
}
  onChange() {
    console.log(this.myTime);
   
  }
  showTime(){
    console.log(this.myDate);
  }



loadMap(type) {
  this.geolocation.getCurrentPosition().then(position => {
    let latLng = new google.maps.LatLng(this.selected.latitude, this.selected.longitude);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: type
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker(latLng);
    // 
    // resp.coords.longitude  
    let latLng2 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
   
    this.addMarker(latLng2);
  
   }).catch((error) => {
     console.log('Error getting location', error);
   });
    
    
 



}

addMarker(latLng) {
  console.log(latLng)
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: latLng
  });

  let content = "<h4>"+latLng+"</h4>";
  this.markers.push(marker);
  this.addInfoWindow(marker, content);
  marker.setMap(this.map);
   // here try cdr:
   this.cdr.detectChanges()
}
addInfoWindow(marker, content) {
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
}
// markMap(){
  
//   let latLng = new google.maps.LatLng(this.selected.latitude, this.selected.longitude);
//     let mapOptions = new google.maps.Marker({
//       position: latLng,
//       title: this.selected.attraction,
//       latitude:this.selected.latitude,
//       longitude:this.selected.longitude
//     });
//     console.log(this.selected.latitude)
//   mapOptions.setMap(this.map)
//   //this.addInfo(mapOptions)
// }

private increment() {

  this.quant++;
}

private decrement() {
  if(this.quant>1){
  this.quant--;
  }
}
addCart(){
  let id = this.activatedRoute.snapshot.paramMap.get('id');
  // Get the information of the country from the API
  this.attService.getOneAtt(id).subscribe(result => {
  this.selected = result;
  console.log(result)
  });
  this.attService.addAtt(this.selected.attraction,this.selected.description,id,
  this.selected.image_url,this.selected.image_url,this.selected.price,this.quant,this.selected.latitude,this.selected.longitude,this.user)
 

  const toast = this.toastController.create({
    message: 'Product Added',
    duration: 3000,
    position: 'bottom'
    
    }).then(alert => alert.present());
  
  
    this.router.navigate(['home']);
  
}
}
