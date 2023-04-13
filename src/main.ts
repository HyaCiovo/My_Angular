import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ThemeServiceInit } from 'ng-devui/theme';
import {
  infinityTheme,
  sweetTheme,
  provenceTheme,
  deepTheme,
} from 'ng-devui/theme-collection';

import { AppModule } from './app/app.module';

ThemeServiceInit({
  'infinity-theme': infinityTheme,
  'provence-theme': provenceTheme,
  'sweet-theme': sweetTheme,
  'deep-theme': deepTheme,
}, 'infinity-theme');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
