import { Component, OnInit } from "@angular/core";

enum themeEnum {
  "infinity-theme" = "无限",
  "provence-theme" = "普罗旺斯",
  "sweet-theme" = "蜜糖",
  "deep-theme" = "深邃夜空",
}
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  themeOptions = [
    { name: "无限", value: "infinity-theme" },
    { name: "普罗旺斯", value: "provence-theme" },
    { name: "蜜糖", value: "sweet-theme" },
    { name: "深邃夜空", value: "deep-theme" },
  ];
  defaultValue = themeEnum[window["devuiThemeService"].currentTheme.id];
  changeTheme(theme: any) {
    window["devuiThemeService"].applyTheme(
      (<any>window)["devuiThemes"][theme.value]
    );
  }
  initTheme() {
    window["devuiThemeService"].applyTheme(
      window["devuiThemes"][this.themeOptions[0].value]
    );
  }
  ngOnInit(): void {
    // this.initTheme()
    // this.defaultValue == (<any>window)["devuiThemeService"].currentTheme.id;
  }
}
