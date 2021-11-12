import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-portal',
  templateUrl: './portal.page.html',
  styleUrls: ['./portal.page.scss'],
})
export class PortalPage implements OnInit {
  myForm: FormGroup;
  qrData = sessionStorage.getItem('user');
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private barcodeScanner: BarcodeScanner) { 
    this.encodeData = sessionStorage.getItem('user');
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    this.myForm = formBuilder.group({
      //'username': '',
      'email':''
      
      });
  }
  
  ngOnInit() {
  }
  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
  forgot() {
    this.authService.forgotPassword(sessionStorage.getItem("user"));
    
    }
  logout() {
    this.authService.logout();
   
    }
}
