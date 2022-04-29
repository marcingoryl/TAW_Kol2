import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-mg',
  templateUrl: './orders-item-mg.component.html',
  styleUrls: ['./orders-item-mg.component.css']
})
export class OrdersItemMGComponent implements OnInit {

  @Input() image?: string;
  @Input() text?: string;
  @Input() title?: string;
  @Input() id?: number;

  constructor() { }

  ngOnInit(): void {
  }

}
