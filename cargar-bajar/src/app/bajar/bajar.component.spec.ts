import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajarComponent } from './bajar.component';

describe('BajarComponent', () => {
  let component: BajarComponent;
  let fixture: ComponentFixture<BajarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
