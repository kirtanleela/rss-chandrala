/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharirikListComponent } from './sharirik-list.component';

describe('SharirikListComponent', () => {
  let component: SharirikListComponent;
  let fixture: ComponentFixture<SharirikListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharirikListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharirikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
