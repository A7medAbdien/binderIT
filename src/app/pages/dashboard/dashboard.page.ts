import { Component } from '@angular/core';
import { Course } from 'src/app/Types/Course';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  courseList: Course[] | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.getData().subscribe(
      {
        next: (data) => {
          this.courseList = data;
          console.log(this.courseList);

        },
        error: (error) => {
          console.error('Error loading data', error);
        }
      }
    );
  }

}
