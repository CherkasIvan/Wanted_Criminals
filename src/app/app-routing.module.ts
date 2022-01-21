import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';


const routes: Routes = [
  { path: 'main-page', loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule) },
  { path: 'content-page', loadChildren: () => import('./pages/content-page/content-page.module').then(m => m.ContentPageModule) },
  { path: 'settings-page', loadChildren: () => import('./pages/settings-page/settings-page.module').then(m => m.SettingsPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
