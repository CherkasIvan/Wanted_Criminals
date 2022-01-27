import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { SettingsPageModule } from './pages/settings-page/settings-page.module';
import { ContentPageModule } from './pages/content-page/content-page.module';
import { NotFoundPageModule } from './pages/not-found-page/not-found-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ProfileSelectionModule } from './components/header/profile-selection/profile-selection.module';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginModalComponent,
    SidenavComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProfileSelectionModule,
    RouterModule,
    BrowserAnimationsModule,
    SettingsPageModule,
    ContentPageModule,
    NotFoundPageModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
