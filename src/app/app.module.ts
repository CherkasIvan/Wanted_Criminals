import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileSelectionComponent } from './components/header/profile-selection/profile-selection.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileSelectionComponent,
    MainComponent,
    SidenavComponent,
    SettingsComponent,
    ContentComponent,
  ],
  imports: [
    FormsModule,
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
