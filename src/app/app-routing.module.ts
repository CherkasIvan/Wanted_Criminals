import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad, CanActivate } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'login-page',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
    data: { animationName: 'login-page' },
  },
  {
    path: 'main-page',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    component: MainPageComponent,
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
    data: { animationName: 'main-page' },
  },
  {
    path: 'content-page',
    loadChildren: () =>
      import('./pages/content-page/content-page.module').then(
        (m) => m.ContentPageModule
      ),
    data: { animationName: 'content-page' },
  },
  {
    path: 'settings-page',
    loadChildren: () =>
      import('./pages/settings-page/settings-page.module').then(
        (m) => m.SettingsPageModule
      ),
    data: { animationName: 'settings-page' },
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
    data: { animationName: '404' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
