import { Component, computed, effect, signal } from "@angular/core";
import { DebouncedFunc, debounce } from "lodash";

import { ToastService } from "ng-devui";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { increment, decrement, reset } from "../../store/counter";
import { Location } from "@angular/common";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
  count = signal<number>(0);
  count$: Observable<number>;
  doubleCount = computed<number>(() => 2 * this.count());
  constructor(
    private toastService: ToastService,
    private location: Location,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select("count");
    effect(
      () => {
        if (this.count() < 0) {
          this.clear();
          this.toastService.open({
            value: [
              {
                severity: "info",
                summary: "Notice",
                content: "Count can not be less than 0",
              },
            ],
          });
        }
        if (this.count() === 5) {
          this.toastService.open({
            value: [
              {
                severity: "info",
                summary: "Notice",
                content: "Count equals 5",
              },
            ],
          });
        }
      },
      { allowSignalWrites: true }
    );
  }
  increment$() {
    this.store.dispatch(increment());
  }

  decrement$() {
    this.store.dispatch(decrement());
  }

  reset$() {
    this.store.dispatch(reset());
  }
  decrease: DebouncedFunc<() => void> = debounce(function () {
    this.count.update((val: number) => val - 1);
  }, 150);
  increase: DebouncedFunc<() => void> = debounce(function () {
    this.count.update((val: number) => val + 1);
  }, 150);
  clear: DebouncedFunc<() => void> = debounce(function () {
    this.count.set(0);
  }, 150);

  back() {
    this.location.back();
  }
}
