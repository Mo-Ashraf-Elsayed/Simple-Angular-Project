import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  checkScrolling: boolean = false;
  @HostListener('document:scroll') scrollFunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
      this.checkScrolling = true;
    else this.checkScrolling = false;
  }
}
