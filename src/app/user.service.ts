import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) {}
  add(name, email) {
    return this.firestore.collection('users').add({ name: name, email: email });
    }
    update(id, name, email) {
    return this.firestore.collection('users').doc(id).update({ name: name, email: email });
    }
    delete(id) {
    return this.firestore.collection('users').doc(id).delete();
    }
    getAll() {
    return this.firestore.collection('users').valueChanges({ idField: 'id' });
    }
    getOne(id) {
    return this.firestore.collection('users').doc(id).valueChanges();
    }
    getAttData(){
      return this.firestore.collection('attractions').valueChanges({ idField: 'id'});
    }
  
    getOneAtt(id) {
    return this.firestore.collection('attractions').doc(id).valueChanges();
    }
    addAttract(attraction,city, des,image_url,latitude,location,longitude,price,special){
      return this.firestore.collection('attractions').add({ attraction: attraction,city:city, description: des,image_url:image_url,latitude:latitude,location:location,longitude:longitude,price:price ,special:special});
}
updateAttract(id,attraction,city, des,image_url,latitude,location,longitude,price,special){
  return this.firestore.collection('attractions').doc(id).update({ attraction: attraction,city:city, description: des,image_url:image_url,latitude:latitude,location:location,longitude:longitude,price:price ,special:special })
}
deleteAttract(id) {
  return this.firestore.collection('attractions').doc(id).delete();
  }

    addAtt(attraction, des,id,image,image_url,price,quant,latitude,longitude,user) {
      return this.firestore.collection('cart').add({ attraction: attraction, des: des,id:id,image:image,image_url:image_url,price:price,quant:quant,latitude:latitude,longitude:longitude,user:user });
      }
      getAllCart() {
        return this.firestore.collection('cart').valueChanges({idField: 'id'});
        }
        updateAtt(id,quant) {
          return this.firestore.collection('cart').doc(id).update({quant:quant });
          }
          deleteAtt(id) {
            return this.firestore.collection('cart').doc(id).delete();
            }
            // deleteAllAtt(){
            //   return this.firestore
            //   .collection('cart')
            //   .get()
            //   .toPromise()
            //   .then((querySnapshot) => {
            //   querySnapshot.forEach((doc) => {
            //     doc.ref.delete();
            //   });
            // });
            // }
           viewOrder() {
              return this.firestore.collection('order').valueChanges({idField:'id'});
              }
          addOrder(attraction, des,image,image_url,price,quant,latitude,longitude,user){
                return this.firestore.collection('order').add({ attraction: attraction, des: des,image:image,image_url:image_url,price:price,quant:quant,latitude:latitude,longitude:longitude,user:user });
          }
              
      getBanner(){
        return this.firestore.collection('banner').valueChanges({idField: 'id'});
      }
      addBanner(imgUrl,url,title){
        return this.firestore.collection('banner').add({imageUrl:imgUrl,url:url,title:title})
      }
      updateBanner(id,imgUrl,url,title){
        return this.firestore.collection('banner').doc(id).update({imageUrl:imgUrl,url:url,title:title})
      }
      deleteBanner(id){
        return this.firestore.collection('banner').doc(id).delete()
      }
      getSpBanner(id){
        return this.firestore.collection('banner').doc(id).valueChanges();
      }
}
