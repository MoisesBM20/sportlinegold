import { Routes } from '@angular/router';
import { HeroComponent } from './components/pages/hero/hero';
import { NavbarComponent } from './components/layout/navbar/navbar';
import { FooterComponent } from './components/layout/footer/footer';
import { ShoesComponent } from './components/pages/category/shoes/shoes';

export const routes: Routes = [
  // 2. Define la ruta
  { path: '', component: HeroComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'hero', component: HeroComponent },
  {path: '**', redirectTo: 'hero', pathMatch: 'full'},
  { path: 'shoes', component: ShoesComponent }
];
