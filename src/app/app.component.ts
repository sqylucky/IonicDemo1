import { Component , ViewChild} from '@angular/core';
import { Platform , MenuController, Nav} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { HomePage } from'../pages/home/home';
import { AboutPage } from'../pages/about/about';
import { ContactPage } from'../pages/contact/contact';
import { SeatPage } from'../pages/seat/seat';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  pages:Array<{title:string ,component:any}>;
  // add
    @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform,
      public menu:MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      this.pages = [
        { title: 'Home',component:HomePage},
        { title: 'About', component: AboutPage},
        { title: 'Contact', component: ContactPage},
        { title: 'Seat',component:SeatPage}
      ]
    });
  }

  openPage(page){
    this.menu.close();
    this.nav.setRoot(page.component);
  }
   
}
