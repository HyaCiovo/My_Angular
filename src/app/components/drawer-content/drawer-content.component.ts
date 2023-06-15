import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.scss']
})
export class DrawerContentComponent {
  @Input() items: any;
  @Input() fullScreen: any;
  @Input() close: any;
  @Input() changeWidth: any;
  @Input() title: any;
  isFullScreen = signal(false);
  drawerTitle = signal("Title")
  constructor() {
  }
  toggleFullScreen() {
    this.isFullScreen.update(val => !val);
    this.fullScreen();
  }
}
