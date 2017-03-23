import { Component } from '@angular/core';

// import { NavController , NavParams } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage  {
  searchQuery: string = '';
  items: string[];


  constructor() {
    this.initializeItems();
  }

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
} 





  
