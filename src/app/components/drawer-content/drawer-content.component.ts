import { Component, Input } from '@angular/core';

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
  isFullScreen = false;
  constructor() {
  }
  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this.fullScreen();
  }
}
