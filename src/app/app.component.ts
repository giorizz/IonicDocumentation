import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Navegação',
      url: '/navegacao',
      icon: 'compass'
    },
    {
      title: 'Botões',
      url: '/botao',
      icon: 'phone-landscape'
    },
    {
      title: 'Alerta',
      url: '/alert',
      icon: 'alert'
    },
    {
      title: 'Action-sheet',
      url: '/action-sheet',
      icon: 'share-social'
    },
    {
      title: 'Badge',
      url: '/badge',
      icon: 'bookmark'
    },
    {
      title: 'Card',
      url: '/card',
      icon: 'card'
    },
    {
      title: 'Checkbox',
      url: '/checkbox',
      icon: 'checkbox'
    },
    {
      title: 'Chip',
      url: '/chip',
      icon: 'hardware-chip'
    },
    {
      title: 'Content',
      url: '/content',
      icon: 'construct'
    },
    {
      title: 'Datetime',
      url: '/datetime',
      icon: 'calendar'
    },
    {
      title: 'Fab',
      url: '/fab',
      icon: 'add-circle'
    },
    {
      title: 'Grid',
      url: '/grid',
      icon: 'grid'
    },
    {
      title: 'Infinit Scroll',
      url: '/infinitscroll',
      icon: 'refresh-circle'
    },
    {
      title: 'Input',
      url: '/input',
      icon: 'text'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Progress Bar',
      url: '/progressbar',
      icon: 'battery-full'
    },
    {
      title: 'Refresh',
      url: '/refresh',
      icon: 'refresh'
    },
    {
      title: 'Reorder',
      url: '/recorder',
      icon: 'reorder-three'
    },
    {
      title: 'Select',
      url: 'select',
      icon: 'checkbox'
    },
    {
      title: 'Toggle',
      url: 'toggle',
      icon: 'toggle'
    },
    {
      title: 'Search bar',
      url: 'searchbar',
      icon: 'search'
    },
    {
      title: 'Segment',
      url: 'segment',
      icon: 'pricetags'
    },
    {
      title: 'Slides',
      url: 'slides',
      icon: 'albums'
    },
    {
      title: 'Toast',
      url: 'toast',
      icon: 'notifications'
    },
    {
      title: 'Modal',
      url: 'modal',
      icon: 'tablet-landscape'
    },
    {
      title: 'Popover',
      url: 'popover',
      icon: 'tablet-landscape'
    },
    {
      title: 'Radio',
      url: 'radio',
      icon: 'radio-button-on'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
