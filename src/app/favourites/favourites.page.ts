import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

  results: any = [];
  constructor(private countriesService: CountriesService) {
  // Call loadAll function in countriesService
  this.countriesService.loadAll().subscribe((data) => {this.results = data});
  }
  searchChanged(event) {
  if (event.target.value != '') {
  // Retrieves search value from event and call searchData function in countriesService
  this.countriesService.searchData(event.target.value).subscribe((data) => {this.results = data});
  }
  else {
  this.countriesService.loadAll().subscribe((data) => {this.results = data});
  }
  }

  ngOnInit() {
  }
  ionViewWillEnter(){
  this.countriesService.loadAll().subscribe((data) => {this.results = data});
  }
}
