import { Component,OnInit } from '@angular/core';
import { NgIf, NgFor ,NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';
import demographics from '../../configs/cities.json';

interface CityData {
  country: string;
  countryCode: string;
  cities: {
    name: string;
    latitude: number;
    longitude: number;
  }[];
}

@Component({
  selector: 'app-ev-alert',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './ev-alert.component.html',
  styleUrls: ['./ev-alert.component.scss']
})
export class EvAlertComponent implements OnInit{

  constructor(public apiService : ApiService){}
  list_of_countries:String[] =[];
  country:CityData[] = [];
  list_of_cities:String[] = [];
  city: string = '';
  country_code : string = '';
  c_code : string = '';
  latitude : number = 0;
  longitude: number = 0;
  stations: any[] = [];
  latitudeDisabled = true;
  longitudeDisabled = true;
  loaderDisabled = true;
  isDarkMode = true;
  currentPage = 0;

  ngOnInit(): void {
    demographics.forEach((metro_city: CityData)=>{
      this.list_of_countries.push(metro_city.country);
    })
  }

  countryDetails(){
    this.latitude = 0;
    this.longitude = 0;
    this.list_of_cities = [];
    this.country = demographics.filter((res: CityData) => {
      return res.country == this.country_code;
    })
    for(var i=0;i<demographics.length;i++){
      if(demographics[i]['country'] == this.country_code){
        this.c_code = demographics[i]['countryCode'];
      }
    }
    var cities = this.country[0]['cities'];
    for(var i=0;i<cities.length;i++){
      this.list_of_cities.push(cities[i]['name']);
    }
  }

  cityDetails(){
    console.log(this.city);
    var cities = this.country[0]['cities'];
    for(var i=0;i<cities.length;i++){
      if(cities[i]['name'] == this.city){
        this.latitude = cities[i]['latitude'];
        this.longitude = cities[i]['longitude'];
      }
    }
  }

  onPrevPage(){

  }

  onNextPage(){
    
  }

  onFetchStations() {
    this.loaderDisabled = false;
    this.stations = [];
    this.apiService.fetchSeatAvailabilty(this.c_code,this.latitude,this.longitude).subscribe((stationData =>{
      try {
        console.log(stationData);
        stationData.forEach((element : any) => { // add interface
          let stationInfo = {}
          stationInfo = {
            "stationName" : element['AddressInfo']['AddressLine1'],
            "address" : element['AddressInfo']['AddressLine2'],
            "distance" : Math.round(element['AddressInfo']['Distance']),
            "power" : element['Connections'][0]['PowerKW'],
            "status" : element['StatusTypeID'] &&  element['StatusTypeID'] == 50 ? "Operational" : "In Progress" 
          }
          this.stations.push(stationInfo);
          this.loaderDisabled = true;
        });
      } catch (error) {
        console.log(error);
      }
    }))
  }

  onSetAlert() {
    alert("✅ Alert set! You'll be notified when new stations are added.");
  }
}
