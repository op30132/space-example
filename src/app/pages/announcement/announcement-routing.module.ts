import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListComponent } from './component/announcement-list/announcement-list.component';
import { DragPracticeComponent } from './component/drag-practice/drag-practice.component';

const routes: Routes = [
  { path: '', component: AnnouncementListComponent },
  {
    path: './:announId',
    component: AnnouncementListComponent
  },
  { path: 'drag', component: DragPracticeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule {}
