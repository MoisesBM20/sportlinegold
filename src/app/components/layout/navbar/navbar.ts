import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  // Escucha el evento de scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}