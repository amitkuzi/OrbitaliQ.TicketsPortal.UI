import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./Pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'tickets', loadComponent: () => import('./Pages/tikets/tikets.component').then(m => m.TiketsComponent) },
    // { path: 'cart', loadComponent: () => import('./Pages/cart/cart.component').then(m => m.CartModule) },
    //{ path: 'checkout', loadComponent: () => import('./Pages/checkout/checkout.component').then(m => m.CheckoutModule) },
    //{ path: 'login', loadComponent: () => import('./Pages/login/login.component').then(m => m.LoginModule) },
    //{ path: 'register', loadComponent: () => import('./Pages/register/register.component').then(m => m.RegisterModule) },
    { path: 'profile', loadComponent: () => import('./Pages/profile/profile.component').then(m => m.ProfileComponent) },
    //{        path: 'about', loadComponent: () => import('./Pages/about/about.component').then(m => m.AboutModule)    },
    { path: 'events', loadComponent: () => import('./Pages/events/events.component').then(m => m.EventsComponent) },
    {
        path: '404', loadComponent: () => import('./Pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    },
    { path: '**', redirectTo: '404' }
];
