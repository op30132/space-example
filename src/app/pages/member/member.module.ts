import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { MemberServicesModule } from './member-services.module';
import { InsertMemberComponent } from './components/insert-member/insert-member.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MemberListComponent,
    EditMemberComponent,
    InsertMemberComponent
  ],
  imports: [SharedModule, MemberRoutingModule, MemberServicesModule, NgbModule]
})
export class MemberModule {}
