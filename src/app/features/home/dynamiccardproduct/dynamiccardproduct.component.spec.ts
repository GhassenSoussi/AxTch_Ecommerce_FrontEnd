import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiccardproductComponent } from './dynamiccardproduct.component';

describe('DynamiccardproductComponent', () => {
  let component: DynamiccardproductComponent;
  let fixture: ComponentFixture<DynamiccardproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiccardproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiccardproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
