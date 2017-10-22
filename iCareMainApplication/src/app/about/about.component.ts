import { BackendService } from './../services/backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    //this.backendService.getAllSubscribers();
  }

  

}
