import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language-selection.service';
import { forEach, isEqual } from 'lodash';
import { Language } from '../../models/language';

@Component({
  selector: 'fw-language-selection',
  templateUrl: './language-selection.component.html',
  styleUrls: ['./language-selection.component.scss'],
})
export class LanguageSelectionComponent implements OnInit {
  public currentLang = '';
  public imagePath = '';
  public languages: Language[] = [];

  constructor(
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.languages = languageService.getLanguages();
  }

  selectLang(path: string, langCode: string): void {
    this.translate.use(langCode);
    this.imagePath = path;
    this.currentLang = langCode;
    localStorage.setItem('lang', langCode);
  }

  ngOnInit(): void {
    const lang = localStorage.getItem('lang');

    forEach(this.languages, (language: any) => {
      this.imagePath = isEqual(language.langCode, lang)
        ? (this.imagePath = language.path)
        : '../../../assets/header/header_menu_uk.svg';
    });

    this.translate.setDefaultLang(lang || 'en');
  }
}
