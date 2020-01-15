import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccarouselComponent } from './dynamiccarousel.component';

describe('DynamiccarouselComponent', () => {
  let component: DynamiccarouselComponent;
  let fixture: ComponentFixture<DynamiccarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
