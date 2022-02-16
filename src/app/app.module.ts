import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgHttpLoaderModule } from 'ng-http-loader';

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
import { CriminalsTableModule } from './components/criminals-table/criminals-table.module';
import { DarkModeModule } from './components/dark-mode/dark-mode.module';
import { LanguageSelectionModule } from './components/language-selection/language-selection.module';

import { MissingTranslationServiceService } from './services/missing-translation-service.service';

import { AuthGuard } from './guards/auth-guard/auth.guard';

import { CrimialsEffects } from './redux/criminals/criminals.effects';
import { appReducers } from './redux';

import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainPageModule,
    SidenavModule,
    LoginModalModule,
    ProfileSelectionModule,
    RouterModule,
    SettingsPageModule,
    LanguageSelectionModule,
    HeaderModule,
    DarkModeModule,
    ContentPageModule,
    NotFoundPageModule,
    CriminalsTableModule,
    AppMaterialModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    EffectsModule.forRoot([CrimialsEffects]),
    StoreModule.forRoot(appReducers),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationServiceService,
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
