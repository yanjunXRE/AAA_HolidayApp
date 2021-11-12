import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  listOfCategories: any;
  constructor (private toastController: ToastController) {
    this.listOfCategories = [
    'Fiction',
    'Technical',
    'Self-Help'
    ];
    }
    open(itemClicked) {
    const toast = this.toastController.create({
    message: itemClicked + ' is selected.',
    duration: 3000,
    position: 'bottom'
    }).then(alert => alert.present());
    }

  ngOnInit() {
  }

}
