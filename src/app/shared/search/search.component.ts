import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() public comicSearch: EventEmitter<String> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public isSearchEmmit(val: String){
    this.comicSearch.emit(val);
  }

}
