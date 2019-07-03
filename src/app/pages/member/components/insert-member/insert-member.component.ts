import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Member } from 'src/app/shared/models/member.model';

@Component({
  selector: 'app-insert-member',
  templateUrl: './insert-member.component.html',
  styleUrls: ['./insert-member.component.css']
})
export class InsertMemberComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
