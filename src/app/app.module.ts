import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { ProfileSelectionComponent } from './components/header/profile-selection/profile-selection.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ProfileSelectionComponent,
    SidenavComponent,
    LoginModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
