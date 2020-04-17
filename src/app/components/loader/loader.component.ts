import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div [ngStyle] = "getStyle()" class = "skelt-load loader"></div>
  `,
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  @Input() width;
  @Input() height;
  constructor() { }

  ngOnInit(): void {
  }
  getStyle(){
    const style ={
      'width.px': this.width? this.width : "",
      'height.px': this.height? this.height : ""
    }
    return style;
  }

}
