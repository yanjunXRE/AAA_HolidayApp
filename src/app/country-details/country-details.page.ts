import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { ActivatedRoute,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.page.html',
  styleUrls: ['./country-details.page.scss'],
})
export class CountryDetailsPage implements OnInit {

  selected: any = {};
  countryPOI:any=[];
  name:string;
  constructor(private activatedRoute: ActivatedRoute, private countriesService: CountriesService) { }
  ngOnInit() {
  // Get the name that was passed with the URL
  this.name = this.activatedRoute.snapshot.paramMap.get('name');
  // Get the information of the country from the API
  this.countriesService.getDetails(this.name).subscribe(result => {
  this.selected = result[0];
  
  });
  this.countriesService.getCountryPOI(this.name).subscribe(result => {
    this.countryPOI = result;
    
    });
}
}