import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (c) => c.AboutComponent
      ),
    title: 'About',
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./components/portfolio/portfolio.component').then(
        (c) => c.PortfolioComponent
      ),
    title: 'Portfolio',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact.component').then(
        (c) => c.ContactComponent
      ),
    title: 'Contact',
  },
  { path: '**', component: NotFoundComponent, title: '404' },
];
