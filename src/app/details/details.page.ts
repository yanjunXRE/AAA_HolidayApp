import { Component, OnInit,ViewChild, ElementRef  } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ChangeDetectorRef } from "@angular/core";
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
declare var google;
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage  {
id=''
map: any;
@ViewChild('map', { static: false }) mapElement: ElementRef;
  user: any = {};
  myForm: FormGroup;
  latitude: number;
  longitude: number;
  constructor(private camera: Camera,private activatedRoute: ActivatedRoute, private userService: UserService,
  private formBuilder: FormBuilder, private alertController: AlertController, private router: Router,private geolocation: Geolocation,
  private nativeGeocoder: NativeGeocoder)
 {
  this.myForm = formBuilder.group({
  'attraction': '',
  'city': '',
  'description':'',
 'image_url':'',
 'latitude':'',
 'location':'',
 'longitude':'',
 'price':0,
 'special':''
  });
  }
   ngOnInit() {
  // Get the id that was passed with the URL
  if(this.activatedRoute.snapshot.paramMap.get('id')!=undefined){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   
    }else{
      this.id = 'add'

    }
    
   
    console.log(this.id)
  if(this.id!=undefined){
  // Retrieve the user information through userService
  this.userService.getOneAtt(this.id).subscribe(result => {
  this.user = result;
  this.user.id = this.id;
  this.myForm.controls.attraction.setValue(this.user.attraction);
  this.myForm.controls.city.setValue(this.user.city);
  this.myForm.controls.description.setValue(this.user.description)
  this.myForm.controls.image_url.setValue(this.user.image_url)
  this.myForm.controls.latitude.setValue(this.user.latitude)
  this.myForm.controls.location.setValue(this.user.location)
  this.myForm.controls.longitude.setValue(this.user.longitude)
  this.myForm.controls.price.setValue(this.user.price)
  this.myForm.controls.special.setValue(this.user.special)
  this.loadMap() 
  });
  
}

  }
  
  takePhoto() {
    
      const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true
      }
      this.camera.getPicture(options).then((imageData) => {
        let base64Image = 'data:image/jpeg;base64,' + imageData;
    
       
        }, (err) => {
        console.log(err)
        });
        }
        
      loadMap() {
  this.geolocation.getCurrentPosition().then((resp) => {
var latLng;
    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    if(this.id=='add'){
    latLng = new google.maps.LatLng(this.latitude, this.longitude);
    }else{
       latLng = new google.maps.LatLng(this.user.latitude,this.user.longitude);
    }
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    if(this.id=='add'){
    this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
    }else{
    this.getAddressFromCoords(this.user.latitude,this.user.longitude);
    }
     
    this.map.addListener('dragend', () => {

      this.latitude = this.map.center.lat();
      this.longitude = this.map.center.lng();

      this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
   
    });

  }).catch((error) => {
    console.log('Error getting location', error);
  });
}

getAddressFromCoords(lattitude, longitude) {
  console.log("getAddressFromCoords " + lattitude + " " + longitude);

  this.myForm.controls.latitude.setValue(lattitude)
  
  this.myForm.controls.longitude.setValue(longitude)
  let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
    .then((result: NativeGeocoderResult[]) => {
   
      let responseAddress = [];
      for (let [key, value] of Object.entries(result[0])) {
        if (value.length > 0)
          responseAddress.push(value);

      }
      responseAddress.reverse();
      for (let value of responseAddress) {
   
      }
     
    })
    .catch((error: any) => {
    
    });

}
  ionViewWillEnter() {
    // Get the id that was passed with the URL
  if(this.activatedRoute.snapshot.paramMap.get('id')!=undefined){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
   
    }else{
      this.id = 'add'

    }
    this.loadMap() 
    console.log(this.id)
  if(this.id!=undefined){
  // Retrieve the user information through userService
  this.userService.getOneAtt(this.id).subscribe(result => {
  this.user = result;
  this.user.id = this.id;
  this.myForm.controls.attraction.setValue(this.user.attraction);
  this.myForm.controls.city.setValue(this.user.city);
  this.myForm.controls.description.setValue(this.user.description)
  this.myForm.controls.image_url.setValue(this.user.image_url)
  this.myForm.controls.latitude.setValue(this.user.latitude)
  this.myForm.controls.location.setValue(this.user.location)
  this.myForm.controls.longitude.setValue(this.user.longitude)
  this.myForm.controls.price.setValue(this.user.price)
  this.myForm.controls.special.setValue(this.user.special)
  });
  
}
}
adding(){
  this.userService.addAttract(this.myForm.value.attraction,this.myForm.value.city,this.myForm.value.description
   ,this.myForm.value.image_url,this.myForm.value.latitude,this.myForm.value.location,this.myForm.value.longitude,this.myForm.value.price,this.myForm.value.special)
   this.router.navigate(['admin']);
}
  update() {
    console.log(this.user.id)
  this.userService.updateAttract(this.user.id, this.myForm.value.attraction,this.myForm.value.city,this.myForm.value.description
    ,this.myForm.value.image_url,this.myForm.value.latitude,this.myForm.value.location,this.myForm.value.longitude,this.myForm.value.price,this.myForm.value.special);
  this.router.navigate(['admin']);
  }
  delete() {
    const alert = this.alertController.create({
    header: 'Alert',
    message: 'Are you sure you want to delete the record?',
    buttons: [
    { text: 'No', role: 'cancel'},
    { text: 'Yes',
    handler: (alertData) => { // Delete user through user service
    this.userService.deleteAttract(this.user.id);
    this.router.navigate(['admin']);
    }
    }
    ]}).then(alert => alert.present());
    }

}
