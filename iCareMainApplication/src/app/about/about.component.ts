import { BackendService } from './../_services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    //this.backendService.getAllSubscribers();
  }

  

}
