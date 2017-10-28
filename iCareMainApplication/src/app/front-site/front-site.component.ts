import { SubscribeComponent } from './../subscribe/subscribe.component';
import { ContactComponent } from './../contact/contact.component';
import { TeamComponent } from './../team/team.component';
import { PunchlineComponent } from './../punchline/punchline.component';
import { AboutComponent } from './../about/about.component';
import { SolutionComponent } from './../solution/solution.component';
import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { DOCUMENT} from '@angular/common';


@Component({
  selector: 'front-site',
  templateUrl: './front-site.component.html',
  styleUrls: ['./front-site.component.css']
})
export class FrontSiteComponent implements OnInit {

  currentAudience: string;
  contentAudience = {student: 'ungdom', adult: 'pårørende', elder: 'eldre'};

  anchors = {
    about:'about',
    subscribe:'subscribe',
    readMore:'readMore',
    contact:'contact',
    home:'home'
  }



  constructor(
    private route: ActivatedRoute, 
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    
    this.route.url.subscribe((data) => {
      const url = data[0];
      if(url)  {
        const route = url.path;
        this.goTo(route);

      
      }
      
    });

    this.route.queryParams.subscribe((params) => {
      console.log("Route changed: ",params);
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

  ngOnDestroy() {
    //this.route.queryParams.unSubscribe();
  }

  onSubmit(): void {
    console.log("User clicked submit");
  }

  goToSubscribe(): void {
      console.log("GoTO Subscribe");
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#subscribe');
      this.pageScrollService.start(pageScrollInstance);
  }

  goTo(DOMElementId: string) {
    console.log("Go To :", DOMElementId);
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#'+DOMElementId);
      this.pageScrollService.start(pageScrollInstance);
  }   

  goToTop(): void {
      console.log("GoTO Top");
      let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#punchline');
      this.pageScrollService.start(pageScrollInstance);
  } 

  //continue here...
  
}
