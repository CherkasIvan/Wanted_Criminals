import { TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let loginPage: LoginPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginPageComponent],
    });
    loginPage = TestBed.inject(LoginPageComponent);
  });

  it('should render component', () => {
    expect(loginPage).toBeTruthy();
  });
});
