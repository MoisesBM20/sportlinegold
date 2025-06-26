import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
  isMegaMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 10;
    }
  }

  

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // --- Lógica del Mega Menú para Escritorio ---
  showMegaMenu() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 1024) {
      this.isMegaMenuOpen = true;
    }
  }

  hideMegaMenu() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth > 1024) {
      this.isMegaMenuOpen = false;
    }
  }
  
  // --- Lógica del Mega Menú para Móvil (al hacer tap) ---
  toggleMegaMenuMobile(event: Event) {
    if (isPlatformBrowser(this.platformId) && window.innerWidth <= 1024) {
      event.preventDefault(); // Previene la navegación
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    }
  }
}
