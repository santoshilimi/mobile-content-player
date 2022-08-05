import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {}



openLink() {
  const browser = this.iab.create('https://dev.knowlg.sunbird.org/players', '_self',);  
  browser.on('loadstop').subscribe(event => {
  });
  browser.on('exit').subscribe(event => {
  browser.close();
  });
}
}
