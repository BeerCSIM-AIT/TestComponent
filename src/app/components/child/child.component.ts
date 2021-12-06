import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input("childCount") count = 0;
  @Output() onClearCount = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  clearCount(){
    this.onClearCount.emit(0);
  }
}
