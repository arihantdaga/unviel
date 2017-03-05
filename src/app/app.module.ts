import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { RandomPage } from '../pages/random/random';
import { UnvielPage } from '../pages/unviel/unviel';
import { TabsPage } from '../pages/tabs/tabs';


// providers
import { AlertService } from '../providers/AlertService';
import { LoadingService } from '../providers/LoadingService';

@NgModule({
  declarations: [
    MyApp,
    RandomPage,
    UnvielPage,

    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RandomPage,
    UnvielPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  AlertService,
  LoadingService
  ]
})
export class AppModule {}
