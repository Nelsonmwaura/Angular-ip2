import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username: string;
  private clientid = 'f4010b7f51080678fdec';
  private clientsecret = 'ba6b75f5e8ca6f329db4a5140cdc48cb2f57854c';


  constructor(private http: Http) {
    console.log("service is now ready!");
    this.username = 'Nelsonmwaura';
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username = "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
}
