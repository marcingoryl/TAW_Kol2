import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMGComponent } from './orders-mg.component';

describe('OrdersMGComponent', () => {
  let component: OrdersMGComponent;
  let fixture: ComponentFixture<OrdersMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersMGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
