import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
