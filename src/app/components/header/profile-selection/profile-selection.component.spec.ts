import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';


import { ProfileSelectionComponent } from './profile-selection.component';

describe('ProfileSelectionComponent', () => {
  let component: ProfileSelectionComponent;
  let fixture: ComponentFixture<ProfileSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ MatMenuModule ],
      declarations: [ ProfileSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
