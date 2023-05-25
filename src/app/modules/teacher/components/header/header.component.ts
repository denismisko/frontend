import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit{

  showSideNavbar = false;
  showDropdownMenu = false;
  @Output() sideNavbarToggled = new EventEmitter<boolean>();

  toggleSideNavbar() {
    this.showSideNavbar = !this.showSideNavbar;
    this.sideNavbarToggled.emit(this.showSideNavbar);
  }

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout();
  }
}
