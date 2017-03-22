import { Component } from '@angular/core';

import { NavController ,MenuController ,Content } from 'ionic-angular';
import { Data } from '../../app/data';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { CommonPage } from'../pages/common/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  datas = [
    new Data(1,'新鲜水果','http://dmr.nosdn.127.net/jJt7Csxw5D6pch6uv9XMDQ==/6896093022457583125.jpg'),
    new Data(2,'新鲜蔬菜','http://imgres.roboo.com/group4/M01/87/02/wKhkDVd8qyaAcDCZAAA5UFD-JMc269.jpg'),
    new Data(3,'国际直邮','http://upload.cbg.cn/2016/0928/1475056392780.jpg'),
    new Data(4,'极速免税','http://img2.cache.netease.com/ent/2016/4/29/2016042909241928fdc_550.jpg')  
  ];
  
  constructor(
    public navCtrl: NavController,
    public menuCtrl:MenuController)  
  {
  
    
  }

  // section2 listSelectType
  listSelectType(index:number){
    if(index == 1){
      this.navCtrl.push(AboutPage);
    }else if(index ==2 ){
      this.navCtrl.push(ContactPage);
    }else if(index == 3){
      alert("敬请期待");
    }else if(index == 4){
      alert("敬请期待");
    }else{
      alert("敬请期待");
    }
  }

  // section4 tabs 
  tabsOption: string = "spring";
  


  
}
