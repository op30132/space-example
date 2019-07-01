import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'member', loadChildren: './pages/member/member.module#MemberModule' }
    ]
  }
];

@NgModule({
  //匯入並登記路徑
  imports: [RouterModule.forRoot(routes)],
  // 匯出RouterModule使匯入routes的模組可存取路由指令
  exports: [RouterModule]
})
export class AppRoutingModule { }
