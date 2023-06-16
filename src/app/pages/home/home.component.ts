import { DOCUMENT } from "@angular/common";
import { Component, Inject, effect, signal } from "@angular/core";
import { DrawerService, IDrawerOpenResult } from "ng-devui/drawer";
import { DrawerContentComponent } from "../../components/drawer-content/drawer-content.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  results: IDrawerOpenResult | null = null;
  doms: any = [];
  sheetTitle: string = null;
  constructor(
    private drawerService: DrawerService,
    @Inject(DOCUMENT) private doc: any
  ) {
    this.doms.push(this.doc.getElementById("app-container"));
    // effect(() => {
    //   console.log(this.sheetTitle);
    // });
  }
  clearInput() {
    this.sheetTitle = null;
  }
  destroy() {
    this.results?.drawerInstance.destroy();
    this.results = null;
  }

  openDrawer() {
    if (this.results) {
      this.results.drawerInstance.show();
    } else {
      this.results = this.drawerService.open({
        drawerContentComponent: DrawerContentComponent,
        width: "600px",
        clickDoms: this.doms,
        destroyOnHide: false,
        position: "right",
        onClose: () => {
          // console.log("on drawer closed");
        },
        data: {
          text: "hello",
          name: "tom1",
          title: this.sheetTitle || "defaultSheetTitle",
          items: [
            "This is item 1",
            "This is item 2",
            "This is item 3",
            "This is item 4",
            "This is item 5",
          ],
          close: () => {
            this.results?.drawerInstance.hide();
          },
          fullScreen: () => {
            this.results?.drawerInstance.toggleFullScreen();
          },
          changeWidth: (event: string) => {
            this.results?.drawerInstance.setWidth(event + "px");
          },
        },
      });
    }
  }
}
