import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync('noop')
  ],

};


// logo: '../assets/images/logo.png',
//   brand: 'Smartag',
//     year: new Date().getFullYear(),
//       // user: 'Lisa',
//       // layoutBoxed: false, // true, false
//       // navCollapsed: isNavCollapsed, // true, false
//       // navBehind: false, // true, false
//       fixedHeader: true, // true, false
//         sidebarWidth: 'middle', // small, middle, large
//           theme: 'light', // light, gray, dark
//             colorOption: '31', // 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
//               AutoCloseMobileNav: true, // true, false. Automatically close sidenav on route change (Mobile only)
//                 productLink: 'http://smartag.io',