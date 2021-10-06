import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentUiComponent } from './student-ui.component';

describe('StudentUiComponent', () => {
  let component: StudentUiComponent;
  let fixture: ComponentFixture<StudentUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
