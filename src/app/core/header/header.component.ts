import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { Member } from '../../shared/models/member.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  profile: Member;

  constructor(private profileService: UserProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.userProfile;
  }

}
