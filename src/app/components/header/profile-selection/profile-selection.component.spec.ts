import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ProfileSelectionComponent } from './profile-selection.component';

const ENGLISH_LANGUAGE = 'en';

describe('ProfileSelectionComponent', () => {
  let profile: ProfileSelectionComponent;
  let translateModule: TranslateModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileSelectionComponent],
      imports: [
        MatDialogModule,
        HttpClientModule,
        TranslateModule.forRoot(),
        RouterTestingModule.withRoutes([]),
      ],
    });
    profile = TestBed.inject(ProfileSelectionComponent);
  });

  it('should render component', () => {
    expect(profile).toBeTruthy();
  });
});
