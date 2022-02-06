import { Injectable } from '@angular/core';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages: Language[] = [
    {
      lang: 'English',
      path: '../../assets/header/header_menu_uk.svg',
      langId: 0,
      langCode: 'en',
    },
    {
      lang: 'Русский',
      path: '../../assets/header/header_menu_ru.svg',
      langId: 1,
      langCode: 'ru',
    },
  ];

  getLanguages(): Array<Language> {
    return this.languages;
  }
}
