import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectLinkYicComponent } from './direct-link-yic.component';

describe('DirectLinkYicComponent', () => {
  let component: DirectLinkYicComponent;
  let fixture: ComponentFixture<DirectLinkYicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectLinkYicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectLinkYicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
