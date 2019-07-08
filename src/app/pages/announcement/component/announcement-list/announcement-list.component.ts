import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pager } from 'src/app/shared/models/pager.model';
import { AnnouncementService } from '../../services/announcement.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Article } from 'src/app/shared/models/article.model';
import { tap, map } from 'rxjs/operators';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  // 查詢條件model
  queryArticle: Article = new Article();
  // 分頁model
  queryPager: Pager<Article> = new Pager();

  articleList$: Observable<Pager<Article>>;
  // 有效日期
  model2: Date;
  model: Date;

  constructor(
    private announcementService: AnnouncementService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.articleList$ = this.announcementService
      .getArticleList(this.queryArticle, this.queryPager)
      .pipe(
        tap(item => {
          this.queryPager.currentPage = item.currentPage;
          this.queryPager.totalCount = item.totalCount;
          for (let i = 0; i < item.resultList.length; i++) {
            item.resultList[i].announContent = item.resultList[
              i
            ].announContent.replace(/\s/g, '<br>');
          }
        })
      );
  }
  // pagination
  onPageChange(nextPage: Pager<any>) {
    this.reloadData();
  }
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
