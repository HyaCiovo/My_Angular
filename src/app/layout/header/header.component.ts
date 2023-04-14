import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  themeOptions = [
    { name: '无限', value: 'infinity-theme' },
    { name: '普罗旺斯', value: 'provence-theme' },
    { name: '蜜糖', value: 'sweet-theme' },
    { name: '深邃夜空', value: 'deep-theme' }]
  defaultValue = this.themeOptions[0]
  changeTheme(theme: any) {
    console.log(theme);
    (<any>window)["devuiThemeService"].applyTheme((<any>window)["devuiThemes"][theme.value]);
  }
}
