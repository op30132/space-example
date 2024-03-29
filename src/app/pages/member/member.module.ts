import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { MemberServicesModule } from './member-services.module';
import { InsertMemberComponent } from './components/insert-member/insert-member.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberStatusPipe } from './pipe/member-status.pipe';
import { FormArrayComponent } from './components/form-array/form-array.component';

@NgModule({
  declarations: [
    MemberListComponent,
    EditMemberComponent,
    InsertMemberComponent,
    MemberStatusPipe,
    FormArrayComponent
  ],
  entryComponents: [InsertMemberComponent],
  imports: [SharedModule, MemberRoutingModule, MemberServicesModule, NgbModule]
})
export class MemberModule {}
