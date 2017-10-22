
/* MODULES */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
/*import {HttpClientModule} from '@angular/common/http';*/
import { HttpModule } from '@angular/http';

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

/* SERVICES */
import { BackendService } from './services/backend.service';


const appRoutes: Routes = [
  {path: '', component: FrontSiteComponent},
  {path: 'home', component: FrontSiteComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: 'more', component: ReadMoreComponent},
  {path: 'data', component: SubscriberDataComponent}

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
    SubscriberDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    HttpModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
