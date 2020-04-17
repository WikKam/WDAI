import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import {Router} from '@angular/router'
import { state, trigger, style, transition,animate } from '@angular/animations';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('load',[
      state('none',style({
        transform:'translateY(15px)',
        opacity: 0.1
    })),
      state('loaded',style({
        transform:'translateY(0)',
        opacity: 1
      })),
      transition('none => loaded', animate('700ms'))
    ]),
    trigger('topLoad',[
      state('none',style({transform: 'translateY(-200%)'})),
      state('loaded',style({
        transform:'translateY(0)'})),
      transition('none => loaded', animate('700ms'))
    ]),
    trigger('botLoad',[
      state('none',style({transform: 'translateY(200%)'})),
      state('loaded',style({
        transform:'translateY(0)'})),
      transition('none => loaded', animate('700ms'))
    ])
  ]
})
export class LandingComponent implements OnInit, AfterViewInit {

  constructor(public router:Router, private ref: ChangeDetectorRef) { }
  isLoaded:string = 'none';
  
  ngAfterViewInit(){
    this.isLoaded = 'loaded';
    this.ref.detectChanges();
  }
  ngOnInit(): void {
  }
  onClick(){
    this.router.navigate(['/courselist']);
  }

}
