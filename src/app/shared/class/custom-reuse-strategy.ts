import {
  RouteReuseStrategy,
  DefaultUrlSerializer,
  ActivatedRouteSnapshot,
  DetachedRouteHandle
} from '@angular/router';
import { EditMemberComponent } from 'src/app/pages/member/components/edit-member/edit-member.component';
import { AnnouncementListComponent } from 'src/app/pages/announcement/component/announcement-list/announcement-list.component';
import { MemberListComponent } from 'src/app/pages/member/components/member-list/member-list.component';
import { LoginComponent } from 'src/app/core/login/login.component';

export class CustomReuseStrategy implements RouteReuseStrategy {
  handlers: { [key: string]: DetachedRouteHandle } = {};
  routesToCache: string[] = ['member'];

  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return this.routesToCache.indexOf(route.data.key) > -1;
    // return true;
  }
  // 當路由離開時，會觸發此方法
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    // 將目前路由內容暫存起來
    this.handlers[route.data.key] = handle;
  }
  // 當路由進入時，可判斷是否還原路由的暫存內容
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    console.log(route.component);
    if (route.data.key) {
      return !!route.routeConfig && !!this.handlers[route.data.key];
    }
    this.handlers = {};
    return false;
  }
  // 從 Cache 中取得對應的暫存內容
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return this.handlers[route.data.key];
  }
  // 判斷是否同一路由
  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    current: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === current.routeConfig;
  }
}
