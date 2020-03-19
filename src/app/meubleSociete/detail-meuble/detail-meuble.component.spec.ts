import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMeubleComponent } from './detail-meuble.component';

describe('DetailMeubleComponent', () => {
  let component: DetailMeubleComponent;
  let fixture: ComponentFixture<DetailMeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
