import { Component } from '@angular/core';
import { Course } from 'src/app/Types/Course';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  courseList: Course[] = [];
  paganizedCourseList: Course[] = [];
  itemsPerPage = 4;
  currentPage = 1;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
    this.loadDataPaganized();
  }

  // load all data
  loadData() {
    this.dataService.getData().subscribe(
      {
        next: (data) => {
          this.courseList = data;
          console.log(this.courseList);
        },
        error: (error) => {
          console.error('Error loading all data', error);
        }
      }
    );
  }

  // load paganized data
  loadDataPaganized() {
    this.dataService.getDataPaganized(this.currentPage, this.itemsPerPage).subscribe(
      {
        next: (data) => {
          this.paganizedCourseList = data;
          console.log(this.paganizedCourseList);
        },
        error: (error) => {
          console.error('Error loading data paganized', error);
        }
      }
    );
  }

  nextPage() {
    this.currentPage++;
    this.loadData();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadData();
    }
  }

}
