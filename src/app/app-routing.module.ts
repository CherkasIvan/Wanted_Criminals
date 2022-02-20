import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad, CanActivate } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';

import { AnimationDataEnum } from './constants/animation-data-enums';

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
    data: { animationName: [AnimationDataEnum.loginPage] },
  },
  {
    path: 'main-page',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
    data: { animationName: [AnimationDataEnum.mainPage] },
  },
  {
    path: 'content-page',
    loadChildren: () =>
      import('./pages/content-page/content-page.module').then(
        (m) => m.ContentPageModule
      ),
    data: { animationName: [AnimationDataEnum.contentPage] },
  },
  {
    path: 'settings-page',
    loadChildren: () =>
      import('./pages/settings-page/settings-page.module').then(
        (m) => m.SettingsPageModule
      ),
    data: { animationName: [AnimationDataEnum.settingsPage] },
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found-page/not-found-page.module').then(
        (m) => m.NotFoundPageModule
      ),
    data: { animationName: [AnimationDataEnum.errorPage] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
