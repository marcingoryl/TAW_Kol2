import { Component, OnInit } from '@angular/core';
import {MGDataService} from "../../services/mg-data.service";

@Component({
  selector: 'app-orders-mg',
  templateUrl: './orders-mg.component.html',
  styleUrls: ['./orders-mg.component.css']
})
export class OrdersMGComponent implements OnInit {

  public items$: any;

  constructor(private dataservice: MGDataService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    return this.dataservice.getAll().subscribe(response => {
      this.items$ = response;
    })
  }

}
