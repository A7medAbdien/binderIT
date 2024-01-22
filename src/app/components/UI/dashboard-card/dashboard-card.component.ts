import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/Types/Course';

const CURRENCY = '₹';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {

  courseName?: string;
  author?: string;
  actualPrice?: string;
  discountPercentage?: string;
  currentPrice?: string;
  isDiscounted: boolean = false;
  tags?: string[];

  @Input() course?: Course;

  ngOnInit(): void {
    this.courseName = this.course?.courseName;
    this.author = this.course?.author;
    this.tags = this.course?.tags;

    this.actualPrice = this.course?.actualPrice;
    this.discountPercentage = this.course?.discountPercentage;
    if (this.course?.discountPercentage != "0") {
      this.isDiscounted = true;
      const actualPrice = Number(this.actualPrice?.replace(/[^0-9.-]+/g, ''));
      const discountPercentage = Number(this.discountPercentage?.replace(/[^0-9.-]+/g, ''));
      this.currentPrice = `${CURRENCY}${(actualPrice - (actualPrice * (discountPercentage / 100))).toFixed(2)}`
    } else {
      this.currentPrice = this.actualPrice;
    }
  }

  addToCart() {
    console.log(this.course);
  }

  addToWishList() {
    console.log(this.course);
  }
}
