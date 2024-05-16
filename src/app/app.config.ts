import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  SearchOutline,
  StepBackwardOutline,
} from '@ant-design/icons-angular/icons';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      NzIconModule.forRoot([SearchOutline, StepBackwardOutline])
    ),
  ],
};
