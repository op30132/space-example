import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pager } from 'src/app/shared/models/pager.model';
import { AnnouncementService } from '../../services/announcement.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  constructor(
    private announcementService: AnnouncementService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  loadData() {}
}
