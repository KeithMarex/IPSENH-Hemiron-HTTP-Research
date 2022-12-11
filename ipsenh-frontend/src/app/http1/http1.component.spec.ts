import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Http1Component } from './http1.component';

describe('Http1Component', () => {
  let component: Http1Component;
  let fixture: ComponentFixture<Http1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Http1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Http1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
