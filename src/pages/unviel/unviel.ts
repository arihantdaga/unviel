import { Component } from '@angular/core';

import { NavController,Platform } from 'ionic-angular';
import { AlertService } from '../../providers/AlertService';
import { LoadingService } from '../../providers/LoadingService';

@Component({
  selector: 'page-unviel',
  templateUrl: 'unviel.html'
})
export class UnvielPage {
  allImgs:any[];
  baseUrl = "https://unsplash.it/400/600?image=";
  imgCount: Number;
  CurrentImgCount:any=0;
  TotalImgCount=1084;
  imgArray:any[]=[];

  

  constructor(public navCtrl: NavController, private platform:Platform,private Alert:AlertService,private loading:LoadingService) {
    this.allImgs=[];
    this.imgCount = 5;
    this.initrandomArray();
    for (let i = this.CurrentImgCount; i < this.imgCount; i+=1) {
      this.allImgs.push({
        src: this.baseUrl + this.imgArray[i].toString()
      });
      this.CurrentImgCount+=1;
    }
  }
  shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
initrandomArray(){
  for(let i =0; i<this.TotalImgCount;i++){
    this.imgArray.push(i);
  }
  this.imgArray = this.shuffle(this.imgArray);
}
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      let limit = this.CurrentImgCount+10;
      for (let i = this.CurrentImgCount; i < limit; i++) {
        this.allImgs.push({
          src: this.baseUrl + this.imgArray[i].toString()
        });
        this.CurrentImgCount+=1;
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
  setWallpaper(src){
      this.platform.ready().then(()=>{
      // this.showLoader("");
      this.loading.showLoading('loading');

      window.wallpaper.setImage(src,"sarplash","sarplash",()=>{
        this.loading.dismiss();
        this.Alert.showAlert("wallpaper Changed","");
      },(err)=>{
        console.log(err);
        console.log(JSON.stringify(err));
        this.loading.dismiss();
        this.Alert.showAlert("Error","Could not change wallpaper");
      });
    });
      // window.loading=event;
  }

}
