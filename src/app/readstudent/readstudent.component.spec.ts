import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadstudentComponent } from './readstudent.component';

describe('ReadstudentComponent', () => {
  let component: ReadstudentComponent;
  let fixture: ComponentFixture<ReadstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
