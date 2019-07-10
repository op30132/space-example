import { Injectable } from '@angular/core';
import { RestService } from 'src/app/core/services/rest.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/models/article.model';
import { Pager } from 'src/app/shared/models/pager.model';
import { QueryOption } from 'src/app/shared/models/query-option.model';

@Injectable()
export class AnnouncementService {
  static BASE_URL = '/rest/announcement/admin/announcements';
  static ANNOUNCEMENT_LIST_URL = `${AnnouncementService.BASE_URL}/pager`;

  constructor(private restService: RestService) {}
  /**
   * 文章清單
   *
   * @param queryArticle 查詢文章條件
   * @param pager 分頁條件
   */

  getArticleList(
    queryArticle: Article,
    pager: Pager<Article>
  ): Observable<Pager<Article>> {
    const queryOption: QueryOption = new QueryOption(queryArticle, pager);

    return this.restService.httpGet<Pager<Article>>(
      AnnouncementService.ANNOUNCEMENT_LIST_URL,
      queryOption
    );
  }
}
