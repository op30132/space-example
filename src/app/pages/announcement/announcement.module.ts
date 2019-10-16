import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementListComponent } from './component/announcement-list/announcement-list.component';
import { AnnouncementService } from './services/announcement.service';
import { DragPracticeComponent } from './component/drag-practice/drag-practice.component';

@NgModule({
  declarations: [AnnouncementListComponent,DragPracticeComponent],
  imports: [SharedModule, AnnouncementRoutingModule, NgbModule],
  providers: [AnnouncementService]
})
export class AnnouncementModule {}
