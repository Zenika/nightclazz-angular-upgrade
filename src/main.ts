import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'
import { routes } from './app/app.routes'

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            BrowserModule,
            HttpClientModule,
        ),
        provideRouter(routes)
    ]
}).catch(err => console.error(err));
