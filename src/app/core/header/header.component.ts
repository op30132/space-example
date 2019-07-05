import { Component, OnInit } from '@angular/core';
import { Member } from '../../shared/models/member.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  profile: Member;
  clicked: boolean;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.profile = this.authService.userProfile;
  }
}
