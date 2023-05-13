import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabandhakComponent } from './prabandhak.component';

describe('PrabandhakComponent', () => {
  let component: PrabandhakComponent;
  let fixture: ComponentFixture<PrabandhakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrabandhakComponent]
    });
    fixture = TestBed.createComponent(PrabandhakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
