import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'My_Angular';
  themeOptions = [
    'infinity-theme',
    'provence-theme',
    'sweet-theme',
    'deep-theme']
  changeTheme(theme: string) {
    (<any>window)["devuiThemeService"].applyTheme((<any>window)["devuiThemes"][theme]);
  }
}
