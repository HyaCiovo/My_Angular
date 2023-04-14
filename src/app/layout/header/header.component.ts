import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  themeOptions = [
    { name: '无限', value: 'infinity-theme' },
    { name: '普罗旺斯', value: 'provence-theme' },
    { name: '蜜糖', value: 'sweet-theme' },
    { name: '深邃夜空', value: 'deep-theme' }]
  defaultValue = this.themeOptions[0]
  changeTheme(theme: any) {
    (<any>window)["devuiThemeService"].applyTheme((<any>window)["devuiThemes"][theme.value]);
  }
  initTheme() {
    (<any>window)["devuiThemeService"].applyTheme((<any>window)["devuiThemes"][this.themeOptions[0].value])
  }
  ngOnInit(): void {
    this.initTheme()
  }
}
