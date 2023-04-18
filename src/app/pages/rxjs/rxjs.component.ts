import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  content: string[] = []
  rxjsTest(): void {
    const observable = new Observable(sub => {
      sub.next(1)
      sub.next(2)
      sub.next([1, 2, 3, 4])
      sub.next("Hello World")
      sub.complete()
    })
    observable.subscribe(v => {
      this.content.push(v.toString())
    })
  }
  ngOnInit(): void {
    this.rxjsTest()
  }
}
