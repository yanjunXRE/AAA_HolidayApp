import { Component,OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router , NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: any = [];
  
  attractions: any[];
  loadattractions: any[];
  banner:any=[];
  selectedbanner:any={};
  constructor(private router:Router,private authService: AuthService,private userService: UserService,private alertController: AlertController,private iab:InAppBrowser,private firestore: AngularFirestore) { 
   
   
    // subscribe allows the data to be fetched whenever there is any changes to the data
//  userService.getAll().subscribe((data) => {this.filterAtt = data;});



  userService.getBanner().subscribe((data) => {this.banner = data;
    console.log(this.banner);});
  


}

ngOnInit(){
  this.userService.getAttData().subscribe(attractions =>{
    this.attractions = attractions;
    this.loadattractions = attractions;
  });
}
initializeItems(): void{
  this.attractions = this.loadattractions;
}
filterList(evt){
  this.initializeItems();
  const searchTerm = evt.srcElement.value;
  if(!searchTerm){
    return;
  }
  this.attractions = this.attractions.filter(currentProducts=>{
    if(currentProducts.attraction && searchTerm){
      if(currentProducts.attraction.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
        return true;
      }
      return false;
    }
  });
}

nav(){
 
  this.router.navigate(['cart']);
}
openSys2(id){
 
  
   var browser=this.iab.create(id);
   browser.on('loadstart').subscribe(event => {
   
    });
    browser.on('exit').subscribe(event => {
   browser.close()
    });
    
  

}
 add() {
  const alert = this.alertController.create({
  header: 'Enter contact:',
  inputs: [{name: 'name', type: 'text', placeholder: 'name'},
  {name: 'email', type: 'text', placeholder: 'email'}],buttons: [
    { text: 'Cancel', role: 'cancel'},
    { text: 'Ok',
    handler: (alertData) => { //takes the data
    this.userService.add(alertData.name, alertData.email);
    }
    }
    ]}).then(alert => alert.present());
    }

   
    // addAtt() {
    //  const alert = this.alertController.create({
    //  header: 'Enter Attraction:',
    //  inputs: [{name: 'name', type: 'text', placeholder: 'name'},
    //  {name: 'email', type: 'text', placeholder: 'email'}],buttons: [
    //    { text: 'Cancel', role: 'cancel'},
    //    { text: 'Ok',
    //    handler: (alertData) => { //takes the data
    //    this.userService.add(alertData.name, alertData.email);
    //    }
    //    }
    //    ]}).then(alert => alert.present());
    //    }


    logout() {
      this.authService.logout();
      }

  // takePhoto() {
  //   const options: CameraOptions = {
  //   quality: 100,
  //   destinationType: this.camera.DestinationType.FILE_URI,
  //   encodingType: this.camera.EncodingType.JPEG,
  //   mediaType: this.camera.MediaType.PICTURE,
  //   saveToPhotoAlbum: true
  //   }
  //   this.camera.getPicture(options).then((imageData) => {
  //     let base64Image = 'data:image/jpeg;base64,' + imageData;
  //     }, (err) => {
  //     console.log(err)
  //     });
  //     }
     //for static add
  // add() {
  // const alert = this.alertController.create({
  // header: 'Enter note:',
  // inputs: [{name: 'title', type: 'text'}],
  // buttons: [
  // { text: 'Cancel', role: 'cancel'},
  // { text: 'Ok',handler: (alertData) => { //takes the data
  //   this.notes.push({ "title": alertData.title });
  //   }
  //   }
  //   ]}).then(alert => alert.present());
  //   }
    edit(note) {
      const alert = this.alertController.create({
      header: 'Edit note:',
      inputs: [{name: 'title',type: 'text'}],
      buttons: [
      {text: 'Cancel', role: 'cancel'},
      {text: 'Ok',
      handler: (alertData) => { //takes the data
      this.notes[this.notes.indexOf(note)] = {"title": alertData.title };
      }
      }
      ]}).then(alert => alert.present());
      }
      delete(note) {
        this.notes.splice(this.notes.indexOf(note), 1);
       }
}
