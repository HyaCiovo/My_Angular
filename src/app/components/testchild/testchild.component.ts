import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-testchild",
  templateUrl: "./testchild.component.html",
  styleUrls: ["./testchild.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestchildComponent {
  @Input() config;

  get runChangeDetection() {
    console.log("Checking the view");
    return true;
  }
}
