import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'pages',
    component: PagesComponent,
    children: [
      {
        path: 'member',
        loadChildren: './pages/member/member.module#MemberModule'
      },
      {
        path: 'announcement',
        loadChildren:
          './pages/announcement/announcement.module#AnnouncementModule'
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  // 匯入並登記路徑
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  // 匯出RouterModule使匯入routes的模組可存取路由指令
  exports: [RouterModule]
})
export class AppRoutingModule {}
