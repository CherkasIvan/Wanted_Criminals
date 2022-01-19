import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from './modules/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileSelectionComponent } from './components/header/profile-selection/profile-selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileSelectionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: HeaderComponent },
    ]),
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
