import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() isDashboard: boolean = false;
  @Input() isOrderOpen: boolean = false;
  @Input() isSearchOpen: boolean = false;
  @Input() title?: string;

  selectedOrder: string | null = null;
  searchValue: string = '';

  clearOrder() {
    this.selectedOrder = null;
  }

  handleOrderSelection(e: any) {
    this.selectedOrder = e.detail.value;
  }

  handleSearch(e: any) {
    this.searchValue = e.detail.value;
  }
}
