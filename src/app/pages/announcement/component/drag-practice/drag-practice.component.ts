import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { tap, map, takeUntil, concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-drag-practice',
  templateUrl: './drag-practice.component.html',
  styleUrls: ['./drag-practice.component.css'],
})
export class DragPracticeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const dragDOM = document.getElementsByClassName('item');
    const body = document.body;
    const mouseDown = fromEvent(dragDOM, 'mousedown');
    const mouseUp = fromEvent(body, 'mouseup');
    const mouseMove = fromEvent(body, 'mousemove');

    mouseDown
      .pipe(
        takeUntil(mouseUp)
        // map(val => ({ x: val.clientY, y: event }))
      )
      .subscribe(console.log);
  }
}
