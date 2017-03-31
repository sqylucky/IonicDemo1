import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  {
  searchQuery: string = '';
  items: string[];

  constructor( public loadingCtrl: LoadingController) {
    this.initializeItems();
  }

   // loading
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
   
  // searchbar
  initializeItems(){
    this.items = [
      'beijing',
      'shanghai',
      'guangzhou',
      'shenzhen',
      'hangzhou',
      'suzhou',
      'luoyang',
      'tianjin',
      'hefei'
    ];
  }
  
 getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);  //小写字母
      })
    }
  }

  // sliding
  share(slidingItem:ItemSliding){
    slidingItem.close();
  }

  // ondrag(item) {
  //   let percent = item.getSlidingPercent();
  //   if (percent > 0) {
  //     // positive
  //     console.log('right side');
  //   } else {
  //     // negative
  //     console.log('left side');
  //   }
  //   if (Math.abs(percent) > 1) {
  //     console.log('overscroll');
  //   }
  // }

} 





  
