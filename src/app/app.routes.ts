import { Routes } from '@angular/router';
import { Hero } from './components/pages/hero/hero';
import { NavbarComponent } from './components/layout/navbar/navbar';
import { FooterComponent } from './components/layout/footer/footer';

export const routes: Routes = [
  // 2. Define la ruta
  { path: '', component: Hero },
  {path: 'navbar', component: NavbarComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'hero', component: Hero },
  {path: '**', redirectTo: 'hero', pathMatch: 'full'}
];
