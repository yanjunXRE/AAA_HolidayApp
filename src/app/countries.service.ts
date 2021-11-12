import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
 searchData(name) { // Calls when search is performed
 return this.http.get("https://restcountries.eu/rest/v2/name/" + name);
 }
 getDetails(name) { // Calls when country is clicked on
 return this.http.get("https://restcountries.eu/rest/v2/name/" + name +"?fullText=true");
 }
 getCountryPOI(name){
  return this.http.get(" https://www.triposo.com/api/20210317/poi.json?location_id="+name+"&account=K22JL1IO&token=71hyk8hfe8s3xqqo3r1v7x94pk0n8qgp")
 }
 loadAll() { // Calls when app loads - to display all countries
 return this.http.get("https://restcountries.eu/rest/v2/all");
 }
}
