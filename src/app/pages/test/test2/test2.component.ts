import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { reset } from "src/app/store/counter";

@Component({
  selector: "app-test2",
  templateUrl: "./test2.component.html",
  styleUrls: ["./test2.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Test2Component {
  constructor(private store: Store<{ count: number }>) {
    console.log(store);
  }
  reset() {
    this.store.dispatch(reset());
  }
}
