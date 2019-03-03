import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule
  ], exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule
  ]
})
export class SharedModule { }
