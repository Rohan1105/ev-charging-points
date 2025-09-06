import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-ev-alert',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './ev-alert.component.html',
  styleUrls: ['./ev-alert.component.scss']
})
export class EvAlertComponent {

  constructor(public apiService : ApiService){}
  city: string = '';
  country_code : string = '';
  latitude : number = 0;
  longitude: number = 0;
  stations: any[] = [];

  onFetchStations() {
    this.apiService.fetchSeatAvailabilty(this.country_code,this.latitude,this.longitude).subscribe((stationData =>{
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
