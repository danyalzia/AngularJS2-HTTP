import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp, Response, Http, Headers} from '@angular/http';

// We need to import toPromise() from RxJS to convert the Observable into Promise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WikipediaService {
  
  constructor(private jsonp: Jsonp) {}
  
  searchKey(input: string) {
    var search = new URLSearchParams()
    search.set('action', 'opensearch');
    search.set('search', input);
    search.set('format', 'json');
    return this.jsonp
                .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search })
                .toPromise()
                .then((request) => request.json()[1]);
  }
}