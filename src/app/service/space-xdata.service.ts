import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpaceXDataService {

  private launchSource = new BehaviorSubject([]);
  filteredLaunches = this.launchSource.asObservable();

  constructor(private http: HttpClient) { 
  }

  getSpaceXList(filters){
    filters['limit'] = 100;
    return this.http.get<any>('https://api.spaceXdata.com/v3/launches', {params: filters});
  }

  updateFilteredLaunches(data) {
    this.launchSource.next(data);
  }
}
