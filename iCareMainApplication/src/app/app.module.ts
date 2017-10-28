
/* MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

/* COMPONENTS */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FrontSiteComponent } from './front-site/front-site.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { NavbarFooterComponent } from './navbar-footer/navbar-footer.component';
import { SignupForTrialComponent } from './signup-for-trial/signup-for-trial.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { SubscriberDataComponent } from './subscriber-data/subscriber-data.component';
import { SolutionComponent } from './solution/solution.component';
import { PunchlineComponent } from './punchline/punchline.component';
import { TeamComponent } from './team/team.component';

/* SERVICES */
import { BackendService } from './_services/backend.service';




const appRoutes: Routes = [
  {path: '', component: FrontSiteComponent},
  {path: 'home', component: FrontSiteComponent},
  {path: 'about', component: FrontSiteComponent},
  {path: 'contact', component: FrontSiteComponent},
  {path: 'subscribe', component: FrontSiteComponent},
  {path: 'more', component: FrontSiteComponent},
  {path: 'data', component: FrontSiteComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FrontSiteComponent,
    AboutComponent,
    ContactComponent,
    SubscribeComponent,
    NavbarFooterComponent,
    SignupForTrialComponent,
    ReadMoreComponent,
    SubscriberDataComponent,
    SolutionComponent,
    PunchlineComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpModule,
    Ng2PageScrollModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
