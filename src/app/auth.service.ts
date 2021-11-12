import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router , NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, 
    private toastController: ToastController,private router: Router) { }

 






    register(email, password) {
      return this.fireAuth.createUserWithEmailAndPassword(email, password)
       .then(() => {
      const toast = this.toastController.create({
      message: 'User created!',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
      this.router.navigate(['/login']);
      
      }).catch((error) => {
        const toast = this.toastController.create({
          message: 'User not created!',
          duration: 3000,
          position: 'bottom'
          }).then(alert => alert.present());
          
         
      })
       }
       forgotPassword(email){
        return this.fireAuth.sendPasswordResetEmail(email)
          .then(() => {
            const toast = this.toastController.create({
              message: "Send",
              duration: 3000,
              position: 'bottom'
              }).then(alert => alert.present());
            // Password reset email sent.
          })
          .catch((error) => {
            const toast = this.toastController.create({
              message: error,
              duration: 3000,
              position: 'bottom'
              }).then(alert => alert.present());
             
                })
       }
       
login(email, password) {
  return this.fireAuth.signInWithEmailAndPassword(email, password)
   .then((user) => {
   if (user) {

  const toast = this.toastController.create({
  message: 'Success',
  duration: 3000,
  position: 'bottom'
  
  }).then(alert => alert.present());
  let navigationExtras: NavigationExtras = { queryParams: {name :user.user.email} };
  this.router.navigate(['home'], navigationExtras);
  
   }
   console.log(user.user.email);
  
 
  }
  ).catch((error) => {
    const toast = this.toastController.create({
      message: 'Not Successful',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
     
       
  })
   }
  redirectFacebook(){
    
  }
   logout() {
   return this.fireAuth.signOut().then(() => {
    sessionStorage.removeItem('user');
    let navigationExtras: NavigationExtras = { queryParams: {name :'guest'} };
    this.router.navigate(['home'], navigationExtras);
  
   });
   }
  
 
}
