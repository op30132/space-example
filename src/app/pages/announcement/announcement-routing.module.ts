import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementListComponent } from './component/announcement-list/announcement-list.component';

const routes: Routes = [
  { path: '', component: AnnouncementListComponent },
  { path: './:announId', component: AnnouncementListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnouncementRoutingModule {}
