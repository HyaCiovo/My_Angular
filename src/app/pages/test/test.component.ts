import { Component, computed, effect, signal } from "@angular/core";
import { ToastService } from "ng-devui";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent {
  count = signal<number>(0);
  doubleCount = computed<number>(() => 2 * this.count());
  constructor(private toastService: ToastService) {
    effect(
      () => {
        if (this.count() < 0) {
          this.clear();
          this.toastService.open({
            value: [
              { severity: "info", summary: "Notice", content: "Count can not be less than 0" },
            ],
          });
        }
        if (this.count() === 5) {
          this.toastService.open({
            value: [
              { severity: "info", summary: "Notice", content: "Count equals 5" },
            ],
          });
        }
      },
      { allowSignalWrites: true }
    );
  }

  decrease(): void {
    this.count.update((val) => val - 1);
  }
  increase(): void {
    this.count.update((val) => val + 1);
  }
  clear(): void {
    this.count.set(0);
  }
}
