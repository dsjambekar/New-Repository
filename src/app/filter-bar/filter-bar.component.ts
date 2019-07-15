import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  @Output() searchEmitter = new EventEmitter<boolean>();
  searchText = '';
  questionType = '';
  difficultyLevel = '';

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.searchEmitter.emit();
  }

}
