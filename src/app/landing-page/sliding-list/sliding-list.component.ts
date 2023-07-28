import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sliding-list',
  templateUrl: './sliding-list.component.html',
  styleUrls: ['./sliding-list.component.scss']
})
export class SlidingListComponent {
  @Input()items:Array<string>=[];


  scrollLeft(elem: HTMLDivElement) {
    let scrollable = elem.scrollWidth/2;
    elem.scrollLeft += scrollable / 2;
    // console.log(scrollable , "scrollable");
    // console.log(elem.scrollLeft , "scroll Left");
    if(elem.scrollLeft >= scrollable -20) elem.scrollLeft= -scrollable;


  }
  scrollRight(elem: HTMLDivElement) {
    let scrollable = elem.scrollWidth/2;
    elem.scrollLeft -= scrollable / 4.1;
    // console.log(scrollable , "scrollable");
    // console.log(elem.scrollLeft , "scroll Left");
    if(elem.scrollLeft == 0) elem.scrollLeft= scrollable;
  }
}
