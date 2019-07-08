import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pager } from 'src/app/shared/models/pager.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  public pageSizes: Number[] = [10, 30, 50, 100];
  @Input() queryPager: Pager<any> = new Pager();
  @Output() pageChange = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.queryPager.pageSize = 10;
  }
  // 每頁幾筆
  onChange(page: number) {
    this.queryPager.pageSize = page;
    this.pageChange.emit(this.queryPager);
  }
  // pagination換分頁
  onPageChange(event) {
    this.queryPager.currentPage = event;
    this.pageChange.emit(this.queryPager);
  }
}
