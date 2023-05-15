import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsvListComponent } from './ssv-list.component';

describe('SsvListComponent', () => {
  let component: SsvListComponent;
  let fixture: ComponentFixture<SsvListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsvListComponent]
    });
    fixture = TestBed.createComponent(SsvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
