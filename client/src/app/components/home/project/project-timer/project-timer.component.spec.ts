import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTimerComponent } from './project-timer.component';

describe('ProjectTimerComponent', () => {
  let component: ProjectTimerComponent;
  let fixture: ComponentFixture<ProjectTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
