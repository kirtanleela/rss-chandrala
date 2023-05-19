import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaudhikListComponent } from './baudhik-list.component';

describe('BaudhikListComponent', () => {
  let component: BaudhikListComponent;
  let fixture: ComponentFixture<BaudhikListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaudhikListComponent]
    });
    fixture = TestBed.createComponent(BaudhikListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
