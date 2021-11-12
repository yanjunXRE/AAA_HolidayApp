
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../countries.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ChangeDetectorRef } from "@angular/core";
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Router , NavigationExtras } from '@angular/router';
declare var google;
@Component({
  selector: 'app-poi-detail-country',
  templateUrl: './poi-detail-country.page.html',
  styleUrls: ['./poi-detail-country.page.scss'],
})
export class PoiDetailCountryPage  {
 @ViewChild('map', { static: false }) mapElement: ElementRef;
name:string;
id:string;
map: any;
address: string;
date: string;
type: 'string';
latitude: number;
longitude: number;

selected:any=[];
select:any={};
response: any;
infoWindows:any=""
user:string;
img:string;
// markers:any={
//   title:"AAA"
//   ,latitude:"1.284859"
//   ,longitude:"103.861011"}
private markers = [];
  constructor(private cdr: ChangeDetectorRef,private activatedRoute: ActivatedRoute, private countryService:CountriesService, private router: Router ,private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
     this.name = this.activatedRoute.snapshot.paramMap.get('name');
     this.id = this.activatedRoute.snapshot.paramMap.get('id');
     
     this.countryService.getCountryPOI(this.name).subscribe(selected=> {
      
      this.selected = selected;
      // this.selected = this.selected.filter(currentSelect=>{
      //   if(currentSelect.id && this.id){
      //     if(currentSelect.id==this.id){
      //       return true;
      //     }
      //     return false;
      //   }
      // });
      console.log(this.selected)
      for(let select in this.selected.results){
        console.log(select)
        
        if(this.id==this.selected.results[select].id){
         this.select=this.selected.results[select];
         console.log( this.select)

        }
      }try{
      if(this.select.images[0].sizes==undefined){
      this.img=this.select.images[0].sizes.original.url
      }
    }catch(error){
      this.img=null
    }
      this.loadMap('roadmap');
    });
  }
  loadMap(type) {
    this.geolocation.getCurrentPosition().then(position => {
      let latLng = new google.maps.LatLng(this.select.coordinates.latitude, this.select.coordinates.longitude);
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
}
