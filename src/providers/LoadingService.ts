import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingService{
loading;
        constructor(private loadingCtrl:LoadingController){

        }
        showLoading(content) {
            window.loading = this.loadingCtrl;
             this.loading = this.loadingCtrl.create({
                spinner: 'dots',
               // content: `<ion-spinner name="dots" style="spinner-ios-dots-color:#FF9500;spinner-md-dots-color:#FF9500"></ion-spinner>`,
                showBackdrop:true
            });

            this.loading.onDidDismiss(() => {
                console.log('Dismissed loading');
            });

            this.loading.present();
            
         }
         dismiss(){
             this.loading.dismiss();
         }
         showTimeOutLoading(timeout){
                          this.loading = this.loadingCtrl.create({
                spinner: 'crescent',
                content: `<ion-spinner name="crescent" style="spinner-ios-crescent-color:#FF9500;spinner-md-crescent-color:#FF9500"></ion-spinner>`,
                showBackdrop:false,
                duration:timeout
            });


            this.loading.present();

         }



}