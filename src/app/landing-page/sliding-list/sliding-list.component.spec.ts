import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingListComponent } from './sliding-list.component';

describe('SlidingListComponent', () => {
  let component: SlidingListComponent;
  let fixture: ComponentFixture<SlidingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidingListComponent]
    });
    fixture = TestBed.createComponent(SlidingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
