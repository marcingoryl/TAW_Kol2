import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMGComponent } from './orders-item-mg.component';

describe('OrdersItemMGComponent', () => {
  let component: OrdersItemMGComponent;
  let fixture: ComponentFixture<OrdersItemMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemMGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
