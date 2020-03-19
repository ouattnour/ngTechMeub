import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMeubleComponent } from './item-meuble.component';

describe('ItemMeubleComponent', () => {
  let component: ItemMeubleComponent;
  let fixture: ComponentFixture<ItemMeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemMeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
