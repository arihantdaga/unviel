import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService{
loading;
        constructor(private loadingCtrl:LoadingController){
            this.loading = this.loadingCtrl.create({
                // spinner: 'circle',
               // content: `<ion-spinner name="dots" style="spinner-ios-dots-color:#FF9500;spinner-md-dots-color:#FF9500"></ion-spinner>`,
                content:"Please wait",
                showBackdrop:true
            });
            this.loading.onDidDismiss(() => {
                console.log('Dismissed loading');
            });
        }
        showLoading(content) {
            // window.loading = this.loadingCtrl;
            this.loading.present();      
         }
         dismiss(){
             this.loading.dismiss();
         }
         
}