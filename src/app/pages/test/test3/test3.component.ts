import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-test3",
  templateUrl: "./test3.component.html",
  styleUrls: ["./test3.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test3Component {
  config = {
    position: "top",
  };
  change() {
    // this.config.position = this.config.position === "bottom" ? "top" : "bottom";
    this.config = {
      position: this.config.position === "bottom" ? "top" : "bottom",
    };
    console.log("clicked");
  }
}
