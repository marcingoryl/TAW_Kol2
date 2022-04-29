import { Component, OnInit } from '@angular/core';
import {MGDataService} from "../../services/mg-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-orders-details-mg',
  templateUrl: './orders-details-mg.component.html',
  styleUrls: ['./orders-details-mg.component.css']
})
export class OrdersDetailsMGComponent implements OnInit {

  public image: string = '';
  public text: string = '';
  public title: string = '';

  constructor(private dataService: MGDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });

    this.dataService.getOne(id).subscribe((res: any) => {
      this.image = res['image'];
      this.text = res['text'];
      this.title = res['title'];
    });
  }

}
