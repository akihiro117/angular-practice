import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeorDetailComponent } from './heor-detail.component';

describe('HeorDetailComponent', () => {
  let component: HeorDetailComponent;
  let fixture: ComponentFixture<HeorDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
