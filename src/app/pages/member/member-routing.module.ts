import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './components/member-list/member-list.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { InsertMemberComponent } from './components/insert-member/insert-member.component';

const routes: Routes = [
  { path: '', component: MemberListComponent },
  { path: 'edit/:id', component: EditMemberComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule {}
