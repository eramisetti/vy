import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaLibraryComponent } from './yoga-library.component';

describe('YogaLibraryComponent', () => {
  let component: YogaLibraryComponent;
  let fixture: ComponentFixture<YogaLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
