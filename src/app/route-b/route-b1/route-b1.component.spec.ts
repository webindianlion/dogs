import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteB1Component } from './route-b1.component';

describe('RouteB1Component', () => {
  let component: RouteB1Component;
  let fixture: ComponentFixture<RouteB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteB1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
