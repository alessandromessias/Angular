import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBinComponent } from './event-bin.component';

describe('EventBinComponent', () => {
  let component: EventBinComponent;
  let fixture: ComponentFixture<EventBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
