import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations'; // Explicitly provide animations
import { provideHttpClient } from '@angular/common/http'; // Optional, if using HTTP later

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideAnimations(), // Ensure animations are explicitly provided
    provideHttpClient() // Add if needed for future API calls
  ]
});
