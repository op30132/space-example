import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnnouncementRoutingModule } from './announcement-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnnouncementListComponent } from './component/announcement-list/announcement-list.component';
import { AnnouncementServiceModule } from './announcement-service.module';

@NgModule({
  declarations: [AnnouncementListComponent],
  imports: [
    SharedModule,
    AnnouncementRoutingModule,
    AnnouncementServiceModule,
    NgbModule
  ]
})
export class AnnouncementModule {}
