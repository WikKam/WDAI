import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() addSearchParams:EventEmitter<any> = new EventEmitter();
  sP:any;
  searchForm = new FormGroup({
    name:  new FormControl(''),
    ECTS: new FormControl(''),
    semester:new FormControl(''),
    maxStudentsNo:new FormControl(''),
  })
  constructor() { }

  ngOnInit() {
  }
  onKeyUp(){
    let searchParams = this.searchForm.value;
    this.sP = searchParams;
    this.addSearchParams.emit(searchParams);
  }
}
