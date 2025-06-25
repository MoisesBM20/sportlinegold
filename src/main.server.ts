import { bootstrapApplication } from '@angular/platform-browser';
// --- ANTES: import { App } from './app/app'; ---
// --- AHORA (CORRECTO): ---
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// --- ANTES: const bootstrap = () => bootstrapApplication(App, config); ---
// --- AHORA (CORRECTO): ---
const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;