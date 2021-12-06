import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestComponents';
  parentCount = 0;
  addParentCount(){
    this.parentCount += 1;
  }

  clearCount(value:any){
    this.parentCount = value;
  }
}
