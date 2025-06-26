import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // Importa isPlatformBrowser

@Component({
  selector: 'app-hero', // Cambiado a app-hero
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html', // Apunta al archivo correcto
  styleUrls: ['./hero.scss']   // Apunta al archivo correcto
})
export class HeroComponent implements OnInit, OnDestroy { // Clase renombrada a HeroComponent
  // Estado del carrusel
  currentSlide = 0;
  slides = [
    { type: 'General' },
    { type: 'Calzado' },
    { type: 'Ropa' }
  ];
  // Intervalo para el cambio automático de slide
  private slideInterval: any;

  // Inyecta PLATFORM_ID para saber si estamos en el navegador o en el servidor
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    // CORRECCIÓN: Se asegura de que el código del carrusel solo se ejecute en el navegador.
    if (isPlatformBrowser(this.platformId)) {
      this.startSlideShow();
    }
  }

  ngOnDestroy(): void {
    // Limpia el intervalo cuando el componente se destruye para evitar fugas de memoria
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  /**
   * Inicia el cambio automático de slides cada 5 segundos.
   */
  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia de slide cada 5 segundos
  }

  /**
   * Pasa al siguiente slide.
   */
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  /**
   * Vuelve al slide anterior.
   */
  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  /**
   * Va a un slide específico al hacer clic en un indicador.
   * @param index - El índice del slide al que se quiere ir.
   */
  goToSlide(index: number): void {
    this.currentSlide = index;
    // Reinicia el intervalo para que el usuario tenga tiempo antes del próximo cambio automático
    clearInterval(this.slideInterval);
    this.startSlideShow();
  }
}
