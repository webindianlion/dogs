import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteB2Component } from './route-b2.component';

describe('RouteB2Component', () => {
  let component: RouteB2Component;
  let fixture: ComponentFixture<RouteB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteB2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
