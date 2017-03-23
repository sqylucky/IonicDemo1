import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  {

  constructor(public navCtrl: NavController) {

  }

  openDetails(){
    this.navCtrl.push(AboutDetailsPage)
  }

}

@Component({
  templateUrl: 'about-details.html',
  template:`
    <ion-header>
      <ion-navbar>
        <ion-title>
          aboutDetails
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>
        <p>this is a page of aboutDetails</p>
    </ion-content>
  `
})

export class AboutDetailsPage{
  constructor(public nav:NavController){

  }
  
}