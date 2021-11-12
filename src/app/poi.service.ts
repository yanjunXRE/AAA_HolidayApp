import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PoiService {

  constructor(private http: HttpClient) { }
 searchData(name) { // Calls when search is performed
 return this.http.get("https://www.triposo.com/api/20210317/poi.json?account=K22JL1IO&token=71hyk8hfe8s3xqqo3r1v7x94pk0n8qgp" + name);
 }
 
 getDetails(name) { // Calls when country is clicked on
 return this.http.get("https://www.triposo.com/api/20210317/poi.json?account=K22JL1IO&token=71hyk8hfe8s3xqqo3r1v7x94pk0n8qgp" + name +"?fullText=true");
 }
 loadAll() { // Calls when app loads - to display all countries
 return this.http.get("https://www.triposo.com/api/20210317/poi.json?account=K22JL1IO&token=71hyk8hfe8s3xqqo3r1v7x94pk0n8qgp");
 }
}
