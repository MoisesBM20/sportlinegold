import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// --- ¡CORRECCIÓN IMPORTANTE EN LAS RUTAS! ---
// La ruta debe ser completa hasta el archivo .ts (puedes omitir la extensión .ts)
// y respetar las mayúsculas/minúsculas de tus carpetas.
import { NavbarComponent } from './components/layout/navbar/navbar';
import { FooterComponent } from './components/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sportlinegold';
}