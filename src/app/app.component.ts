import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavbarComponent } from './components/layout/navbar/navbar';
import { FooterComponent } from './components/layout/footer/footer';

import { ShoesComponent } from './components/pages/category/shoes/shoes';

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