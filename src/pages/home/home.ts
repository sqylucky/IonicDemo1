import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Data } from '../../app/data';


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
  public navCtrl: NavController,)  
  {
  
    
  }

  // section4 tabs 
  tabsOption: string = "spring";
  

  clickLi(){
    
    
  }

}
