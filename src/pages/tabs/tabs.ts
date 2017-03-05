import { Component } from '@angular/core';

import { RandomPage } from '../random/random';
import { UnvielPage } from '../unviel/unviel';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RandomPage;
  tab2Root: any = UnvielPage;

  constructor() {

  }
}
