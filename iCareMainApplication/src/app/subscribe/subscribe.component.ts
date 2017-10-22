import { BackendService } from './../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscriberEmail: string;

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }

  subscribe = async (email: string) => {
    const response = await this.backendService.subscribe(email);
    return response;
  }

  submitted = false;

  onSubmit = async () => {
    try {
      const response = await this.subscribe(this.subscriberEmail);
      this.submitted = true;
      console.log("Added subscriber");
    } catch(err) {
      console.error(err);
    }
     
  
}
}
