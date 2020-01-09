import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
}) 
export class SearchService {

  // apiRoot:string = 'https://itunes.apple.com/search';
  results: any;
  loading: boolean;
  constructor(private http: HttpClient) { 
    this.results = [];
    this.loading = false;
  }
  search(term: string) {
    let promise = new Promise((resolve, reject) => {
    this.http.get("https://itunes.apple.com/search?term=" + term).toPromise().then(
      res => { //this line is not returning anything, is the pointer enough?
        this.results = res;
        resolve();
      }, msg => { 
        reject(msg);
      })
    });
    return promise;
  }

}
