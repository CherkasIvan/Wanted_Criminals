import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { SettingsPageModule } from './pages/settings-page/settings-page.module';
import { ContentPageModule } from './pages/content-page/content-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';

import { SidenavModule } from './components/sidenav/sidenav.module';
import { ProfileSelectionModule } from './components/header/profile-selection/profile-selection.module';
import { LoginModalModule } from './components/login-modal/login-modal.module';
import { HeaderModule } from './components/header/header.module';

import { AppComponent } from './app.component';

import { AuthGuard } from './guards/auth-guard/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainPageModule,
    SidenavModule,
    LoginModalModule,
    ProfileSelectionModule,
    RouterModule,
    SettingsPageModule,
    HeaderModule,
    ContentPageModule,
    NotFoundPageModule,
    AppMaterialModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
