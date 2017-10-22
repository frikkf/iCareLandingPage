import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-front-site',
  templateUrl: './front-site.component.html',
  styleUrls: ['./front-site.component.css']
})
export class FrontSiteComponent implements OnInit {

  currentAudience: string;
  contentAudience = {student: 'ungdom', adult: 'pårørende', elder: 'eldre'};
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
			if (params.audience) {
			    switch (params.audience) {
            case this.contentAudience.student:
              this.currentAudience = this.contentAudience.student;
              break;
            case this.contentAudience.adult:
              this.currentAudience = this.contentAudience.adult;
              break;
            case this.contentAudience.elder:
              this.currentAudience = this.contentAudience.elder;
            default:
              this.currentAudience = this.contentAudience.adult;
              break;
         }
			}
		});
  }

  onSubmit() {
    console.log("User clicked submit");
  }

  //continue here...
  
}
