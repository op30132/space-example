import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';


const routes: Routes = [
  { path: '', component: MemberListComponent, data: { key: 'member' } },
  { path: 'edit/:id', component: EditMemberComponent, data: { key: 'edit' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule { }
