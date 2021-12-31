/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentssTestedComponent } from './studentss-tested.component';

describe('StudentssTestedComponent', () => {
  let component: StudentssTestedComponent;
  let fixture: ComponentFixture<StudentssTestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentssTestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentssTestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
