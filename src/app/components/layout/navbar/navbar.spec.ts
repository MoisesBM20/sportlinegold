import { ComponentFixture, TestBed } from '@angular/core/testing';
// --- ¡CORRECCIÓN! Debes importar el componente que vas a probar ---
import { NavbarComponent } from './navbar';

describe('NavbarComponent', () => { // Es buena práctica nombrar el describe como el componente
  // --- ¡CORRECCIÓN! Usa el nombre de clase correcto: NavbarComponent ---
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // --- ¡CORRECCIÓN! Importa el componente correcto ---
      imports: [NavbarComponent]
    })
    .compileComponents();

    // --- ¡CORRECCIÓN! Crea el componente correcto ---
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});