import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbreadComponent } from './subbread.component';

describe('SubbreadComponent', () => {
  let component: SubbreadComponent;
  let fixture: ComponentFixture<SubbreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubbreadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
