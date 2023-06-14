import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  showLoading: boolean = false;
  async toggleLoading() {
    this.showLoading = true;
    await this.fetchData();
    this.showLoading = false;
  }
  fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1500);
    });
  }
}
