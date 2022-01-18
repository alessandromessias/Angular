import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomDirComponent } from './ng-custom-dir.component';

describe('NgCustomDirComponent', () => {
  let component: NgCustomDirComponent;
  let fixture: ComponentFixture<NgCustomDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomDirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCustomDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
