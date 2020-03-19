import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMeubleComponent } from './liste-meuble.component';

describe('ListeMeubleComponent', () => {
  let component: ListeMeubleComponent;
  let fixture: ComponentFixture<ListeMeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeMeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
