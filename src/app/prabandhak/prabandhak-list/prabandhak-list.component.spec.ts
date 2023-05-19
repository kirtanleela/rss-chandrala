/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PrabandhakListComponent } from './prabandhak-list.component';

describe('PrabandhakListComponent', () => {
  let component: PrabandhakListComponent;
  let fixture: ComponentFixture<PrabandhakListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrabandhakListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrabandhakListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
