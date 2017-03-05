import { Component } from '@angular/core';

import { NavController,Platform, LoadingController } from 'ionic-angular';
import { AlertService } from '../../providers/AlertService';
import { LoadingService } from '../../providers/LoadingService';

@Component({
  selector: 'page-random',
  templateUrl: 'random.html'
})
export class RandomPage {
  randomUrl :String = "https://unsplash.it/400/600?random";
  loadingState:any;

  constructor(public navCtrl: NavController, private platform:Platform,private Alert:AlertService,private loading:LoadingService,private loader:LoadingController) {
    this.navCtrl=navCtrl;
  }
  showLoader(content){
    window.loading = this.loader;
    this.loadingState = this.loader.create({
          spinner: 'crescent',
          content: content,
      //    content: `<ion-spinner name="dots" style="spinner-ios-dots-color:#FF9500;spinner-md-dots-color:#FF9500"></ion-spinner>`,
          showBackdrop:true
      });
      this.loadingState.present();

      this.loadingState.onDidDismiss(() => {
          console.log('Dismissed loading');
      });
  }
  dismissLoader(){
    this.loadingState.dismiss();
  }
  setRandom(){
    this.platform.ready().then(()=>{
      // this.showLoader("");
      this.loading.showLoading('loading');

      window.wallpaper.setImage(this.randomUrl,"sarplash","sarplash",()=>{
        this.loading.dismiss();
        this.Alert.showAlert("wallpaper Changed","");
      },(err)=>{
        console.log(err);
        console.log(JSON.stringify(err));
        this.loading.dismiss();
        this.Alert.showAlert("Error","Could not change wallpaper");
      });
    });
  }
}
