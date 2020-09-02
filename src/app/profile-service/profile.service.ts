import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username :string;
  private clientid = 'Iv1.df9b6881ee98d126';
  private clientsecret = '3e4cce66aa3d3255af2dd7e3ba8a07f046db55cb';


  constructor(private http:Http ){
    console.log ("service is now ready!");
    this.username = 'Nelsonmwaura';
  }

  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username = "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
}
