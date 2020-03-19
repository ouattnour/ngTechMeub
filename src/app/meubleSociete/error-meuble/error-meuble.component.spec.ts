import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMeubleComponent } from './error-meuble.component';

describe('ErrorMeubleComponent', () => {
  let component: ErrorMeubleComponent;
  let fixture: ComponentFixture<ErrorMeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
