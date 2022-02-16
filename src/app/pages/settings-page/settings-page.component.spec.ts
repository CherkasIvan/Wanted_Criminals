import { TestBed } from '@angular/core/testing';
import { SettingsPageComponent } from './settings-page.component';

describe('SettingsPageComponent', () => {
  let settingsPage: SettingsPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsPageComponent],
    });
    settingsPage = TestBed.inject(SettingsPageComponent);
  });

  it('should render component', () => {
    expect(settingsPage).toBeTruthy();
  });
});
