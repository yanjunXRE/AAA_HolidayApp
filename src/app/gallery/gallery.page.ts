import { Component, OnInit } from '@angular/core';
import{PoiService} from '../poi.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  results: any = [];
  loadResult: any=[];
  constructor(private PoiService: PoiService) {
  // Call loadAll function in countriesService

  
  }
  // searchChanged(event) {
  //   if (event.target.value != '') {
  //   // Retrieves search value from event and call searchData function in countriesService
  //   this.PoiService.searchData(event.target.value).subscribe((data) => {this.results = data});
  //   }
  //   else {
  //   this.PoiService.loadAll().subscribe((data) => {this.results = data});
  //   }
  //   }
  ngOnInit() {
    this.PoiService.loadAll().subscribe((data) => {
      this.results = data;
      this.results= this.results.results
      this.loadResult = this.results;
     
    });
      
  }
initializeItems(): void{
  
  this.results = this.loadResult;
  console.log(this.loadResult);
}
filterList(evt){
  this.initializeItems();
  console.log(this.loadResult);
  const searchTerm = evt.srcElement.value;
  if(!searchTerm){
    return;
  }
  this.results = this.results.filter(currentProducts=>{
    if(currentProducts.name && searchTerm){
      if(currentProducts.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
       
        return true;
      }
      return false;
    }
  });
}
}
