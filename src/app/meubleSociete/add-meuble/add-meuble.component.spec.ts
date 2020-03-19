import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeubleComponent } from './add-meuble.component';

describe('AddMeubleComponent', () => {
  let component: AddMeubleComponent;
  let fixture: ComponentFixture<AddMeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
