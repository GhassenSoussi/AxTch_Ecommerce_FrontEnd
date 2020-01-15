import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsandtopicsComponent } from './newsandtopics.component';

describe('NewsandtopicsComponent', () => {
  let component: NewsandtopicsComponent;
  let fixture: ComponentFixture<NewsandtopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsandtopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsandtopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
