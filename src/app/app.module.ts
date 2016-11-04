import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component'
import { WikipediaService } from './wikipedia-search/wikipedia.service';

import { youTubeServiceInjectables } from './youtube-search/youtube-search.component';
import { HttpModule } from '@angular/http';

import {
  YoutubeSearchComponent,
  SearchBox,
  SearchResultComponent
} from './youtube-search/youtube-search.component';


@NgModule({
  imports: [BrowserModule, JsonpModule, HttpModule],
  declarations: [AppComponent, WikipediaSearchComponent, YoutubeSearchComponent,
    SearchBox,
    SearchResultComponent],
  providers: [WikipediaService, youTubeServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule {}