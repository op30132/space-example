import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { MemberListComponent } from './pages/member/components/member-list/member-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'member', loadChildren: './pages/member/member.module#MemberModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
