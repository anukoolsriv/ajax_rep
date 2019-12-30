import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxCommComponent } from './ajax-comm.component';

describe('AjaxCommComponent', () => {
  let component: AjaxCommComponent;
  let fixture: ComponentFixture<AjaxCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
