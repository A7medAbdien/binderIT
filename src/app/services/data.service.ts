import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Course } from '../Types/Course';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Course[]> {
    return this.http.get<Course[]>(this.dataUrl);
  }

  getDataPaganized(pageNumber: number, itemsPerPage: number): Observable<any[]> {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Fetch data from the server, adjusting based on startIndex and endIndex
    return this.http.get<any[]>(this.dataUrl)
      .pipe(
        map(data => data.slice(startIndex, endIndex))
      );
  }
}
