import { Routes } from '@angular/router';
import { HeroComponent } from './components/pages/hero/hero';
import { NavbarComponent } from './components/layout/navbar/navbar';
import { FooterComponent } from './components/layout/footer/footer';
import { ShoesComponent } from './components/pages/category/shoes/shoes';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'hero', component: HeroComponent },
  { path: 'shoes', component: ShoesComponent }, // Mover antes del wildcard
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'hero', pathMatch: 'full' }
];