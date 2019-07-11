import {
  RouteReuseStrategy,
  DefaultUrlSerializer,
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
} from '@angular/router';
import { AnnouncementListComponent } from 'src/app/pages/announcement/component/announcement-list/announcement-list.component';
import { LoginComponent } from 'src/app/core/login/login.component';

export class CustomReuseStrategy implements RouteReuseStrategy {
  public static handlers: { [key: string]: DetachedRouteHandle } = {};
  routeCache: string[] = ['member']


  // 判斷路由是否能重複使用
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // 默認所有的路由設定都可以重複使用
    // 可透過 route.data 的方式來設定重複使用的規則
    return this.routeCache.indexOf(route.data.key) > -1;
  }

  // 當路由離開時，會觸發此方法
  public store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    // 將目前路由內容暫存起來
    CustomReuseStrategy.handlers[route.data.key] = handle;
  }

  // 當路由進入時，可判斷是否還原路由的暫存內容
  public shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (route.data.key !== undefined) {
      return (
        !!route.routeConfig &&
        !!CustomReuseStrategy.handlers[route.data.key]
      );
    } else {
      CustomReuseStrategy.handlers = {}
      return false
    }

  }
  // 從 Cache 中取得對應的暫存內容
  public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) {
      return null;
    }
    return CustomReuseStrategy.handlers[route.data.key];
  }

  // 判斷是否同一路由
  public shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    current: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === current.routeConfig;
  }

}
