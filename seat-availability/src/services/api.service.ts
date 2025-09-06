import { Injectable,inject } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  api_key = "f7a930dc-c0e3-458a-a530-c86af1b00519";
  max_results = 100;
  output = "json";
  compact = "true";
  verbose = "false";
  baseUrl = "https://api.openchargemap.io/v3/poi";
  url:string[] = [];

  fetchSeatAvailabilty(country_code:string,latitude:number,longitude:number) : Observable<any>{
    let final_url = this.buildUrl(country_code,latitude,longitude);
    return this.http.get<any>(final_url);   //add an interface
  }

  buildUrl(country_code:string,latitude:number,longitude:number){
    if(this.output && this.output.length>0) this.url.push(`output=${this.output}`);
    if(country_code && country_code.length>0) this.url.push(`countrycode=${country_code}`);
    if(this.max_results) this.url.push(`maxresults=${this.max_results}`);
    if(latitude) this.url.push(`latitude=${latitude}`);
    if(longitude) this.url.push(`longitude=${longitude}`);
    if(this.compact && this.compact.length>0) this.url.push(`compact=${this.compact}`);
    if(this.verbose && this.verbose.length>0) this.url.push(`verbose=${this.verbose}`);
    if(this.api_key) this.url.push(`key=${this.api_key}`);
    return `${this.baseUrl}?${this.url.join('&')}`;
  }

}
