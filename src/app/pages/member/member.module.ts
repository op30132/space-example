import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberRoutingModule } from './member-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { EditMemberComponent } from './components/edit-member/edit-member.component';
import { MemberServicesModule } from './member-services.module';

@NgModule({
  declarations: [
    MemberListComponent,
    EditMemberComponent
  ],
  imports: [
    SharedModule,
    MemberRoutingModule,
    MemberServicesModule
  ]
})
export class MemberModule { }
