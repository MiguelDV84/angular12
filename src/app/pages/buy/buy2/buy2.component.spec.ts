import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Buy2Component } from './buy2.component';

describe('Buy2Component', () => {
  let component: Buy2Component;
  let fixture: ComponentFixture<Buy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Buy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Buy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
