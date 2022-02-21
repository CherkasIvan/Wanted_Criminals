import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelectionComponent } from './language-selection.component';

describe('LanguageSelectionComponent', () => {
  let languagePage: LanguageSelectionComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [LanguageSelectionComponent],
    });
    languagePage = TestBed.inject(LanguageSelectionComponent);
  });

  it('should render component', () => {
    expect(languagePage).toBeTruthy();
  });
});
