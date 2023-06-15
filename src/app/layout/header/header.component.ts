import { Component, OnInit } from "@angular/core";

enum themeEnum {
  "infinity-theme" = "Infinity",
  "provence-theme" = "Provence",
  "sweet-theme" = "Sweet",
  "deep-theme" = "Dark",
}
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  themeOptions = [
    { name: "Infinity", value: "infinity-theme" },
    { name: "Provence", value: "provence-theme" },
    { name: "Sweet", value: "sweet-theme" },
    { name: "Dark", value: "deep-theme" },
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
