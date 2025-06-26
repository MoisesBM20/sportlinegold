// navbar.component.ts
import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  // Se usa ViewEncapsulation.None para que los estilos globales de :root funcionen
  // si se definen en este componente. Alternativamente, definirlos en styles.scss global.
  encapsulation: ViewEncapsulation.None 
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
  isDropdownOpen = false;

  // Escucha el evento de scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Añade la clase 'scrolled' si el scroll es mayor a 10px, si no, la quita.
    this.isScrolled = window.scrollY > 10;
  }

  // Alterna la visibilidad del menú en vista móvil
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Muestra el menú desplegable en hover (escritorio)
  showDropdown() {
    // Solo se activa en pantallas más grandes que 1024px
    if (window.innerWidth > 1024) {
      this.isDropdownOpen = true;
    }
  }

  // Oculta el menú desplegable al quitar el hover (escritorio)
  hideDropdown() {
    if (window.innerWidth > 1024) {
      this.isDropdownOpen = false;
    }
  }
}
