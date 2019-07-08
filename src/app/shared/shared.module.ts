import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PaginationComponent
  ]
})
export class SharedModule {}
