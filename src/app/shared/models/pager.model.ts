export class Pager<T> {
  [x: string]: any;
  currentPage?: number;
  pageSize?: number;
  maxPage?: number;
  totalCount?: number;
  resultList?: T[];
}
