import { Component, computed, effect, signal } from "@angular/core";
import { DebouncedFunc, debounce } from "lodash";
import { Router } from "@angular/router";
import { ToastService } from "ng-devui";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
  count = signal<number>(0);
  doubleCount = computed<number>(() => 2 * this.count());
  constructor(private toastService: ToastService, private router: Router) {
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

  decrease: DebouncedFunc<() => void> = debounce(function () {
    this.count.update((val: number) => val - 1);
  }, 150);
  increase: DebouncedFunc<() => void> = debounce(function () {
    this.count.update((val: number) => val + 1);
  }, 150);
  clear: DebouncedFunc<() => void> = debounce(function () {
    this.count.set(0);
  }, 150);

  back(){
    this.router.navigate([".."])
  }
}
