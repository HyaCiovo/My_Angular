import { Component, OnInit, signal } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-rxjs",
  templateUrl: "./rxjs.component.html",
  styleUrls: ["./rxjs.component.scss"],
})
export class RxjsComponent implements OnInit {
  content = signal<Array<string>>([]);
  rxjsTest(): void {
    const observable = new Observable((sub) => {
      sub.next(1);
      sub.next(2);
      sub.next([1, 2, 3, 4]);
      sub.next("Hello World");
      sub.complete();
    });
    observable.subscribe((v) => {
      this.content.update((val) => val.concat(v.toString()));
    });
  }
  ngOnInit(): void {
    this.rxjsTest();
  }
}
