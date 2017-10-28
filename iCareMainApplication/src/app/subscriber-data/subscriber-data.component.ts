import { BackendService } from './../_services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-data',
  templateUrl: './subscriber-data.component.html',
  styleUrls: ['./subscriber-data.component.css']
})
export class SubscriberDataComponent implements OnInit {

  subscribers: string[];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.populateSubscribers();
    
  }

  populateSubscribers = async () => {
    const subscriberData = await this.backendService.getAllSubscribers();
    this.subscribers = subscriberData.map( subscriberData => subscriberData.email);
  }

}
