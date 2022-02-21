import { TestBed } from '@angular/core/testing';
import { ContentPageComponent } from './content-page.component';

describe('ContentPageComponent', () => {
  let contentPage: ContentPageComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentPageComponent],
    });
    contentPage = TestBed.inject(ContentPageComponent);
  });

  it('should render component', () => {
    expect(contentPage).toBeTruthy();
  });
});
