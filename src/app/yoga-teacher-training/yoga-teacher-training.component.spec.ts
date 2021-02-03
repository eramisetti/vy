import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaTeacherTrainingComponent } from './yoga-teacher-training.component';

describe('YogaTeacherTrainingComponent', () => {
  let component: YogaTeacherTrainingComponent;
  let fixture: ComponentFixture<YogaTeacherTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaTeacherTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaTeacherTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
