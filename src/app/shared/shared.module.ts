import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationComponent } from './component/pagination/pagination.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from './class/custom-reuse-strategy';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PaginationComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }]
})
export class SharedModule { }
