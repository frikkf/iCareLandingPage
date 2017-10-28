import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class BackendService {

  private getAllSubscribersURL: string = "/api/subscriber/all";
  private subscribeURL: string = "/api/subscriber/create";

  constructor(private http: Http) {}

  getAllSubscribers() {
    return this.http.get(this.getAllSubscribersURL).map((response) => {
      console.log(response.json());
      return response.json();
    }).toPromise();
  }

  subscribe(email: string) {
    return this.http.post(this.subscribeURL, {email: email}).map( (response) => {response.json()}).toPromise();
  }

}
