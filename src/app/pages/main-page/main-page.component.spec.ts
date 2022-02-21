import { TestBed } from '@angular/core/testing';
import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let mainPage: MainPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainPageComponent],
    });
    mainPage = TestBed.inject(MainPageComponent);
  });

  it('should render component', () => {
    expect(mainPage).toBeTruthy();
  });
});
