import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMGComponent } from './orders-details-mg.component';

describe('OrdersDetailsMGComponent', () => {
  let component: OrdersDetailsMGComponent;
  let fixture: ComponentFixture<OrdersDetailsMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
