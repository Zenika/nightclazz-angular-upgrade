import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { provideRouter, withComponentInputBinding } from '@angular/router'
import { routes } from './app.routes'
import { ApplicationConfig } from '@angular/core'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes, withComponentInputBinding())
  ]
}
