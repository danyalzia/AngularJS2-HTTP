import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'wikipedia-search',
  templateUrl: './wikipedia-search.component.html'
})
export class WikipediaSearchComponent {
  items: Array<string>;
  
  constructor(private wikipediaService: WikipediaService) {}
  
  searchKey(input) {
    this.wikipediaService.searchKey(input).then(items => this.items = items);
  }  
}