import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBaudhikComponent } from './add-baudhik.component';

describe('AddBaudhikComponent', () => {
  let component: AddBaudhikComponent;
  let fixture: ComponentFixture<AddBaudhikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBaudhikComponent]
    });
    fixture = TestBed.createComponent(AddBaudhikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
