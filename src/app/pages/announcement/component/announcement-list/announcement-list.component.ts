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
  styleUrls: ['./announcement-list.component.css'],
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
  // 載文章列表
  reloadData() {
    this.articleList$ = this.announcementService
      .getArticleList(this.queryArticle, this.queryPager)
      .pipe(
        map(item => {
          item.resultList.forEach(el => {
            // el.announContent = el.announContent.replace(
            //   new RegExp('\n', 'g'),
            //   '<br/>'
            // );
          });
          return item;
        }),
        tap(item => {
          this.queryPager.currentPage = item.currentPage;
          this.queryPager.totalCount = item.totalCount;
        })
      );
  }
  // pagination
  onPageChange(nextPage: Pager<any>) {
    this.reloadData();
  }
  // 打開article detail的modal
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}
