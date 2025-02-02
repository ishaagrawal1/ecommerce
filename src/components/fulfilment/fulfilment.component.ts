import { Component, OnInit } from '@angular/core';
import { FullfillmentService } from '../../services/fullfillment.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fulfilment',
  standalone: true,
  imports: [ButtonModule, TagModule, TableModule, CommonModule],
  templateUrl: './fulfilment.component.html',
  styleUrl: './fulfilment.component.css',
})
export class FulfilmentComponent implements OnInit {
  data: any = {};
  page: number = 1;
  result: number = 10;
  constructor(private fulfilmentService: FullfillmentService) {
    this.fulfilmentService.getfullfillment();
  }
  ngOnInit(): void {
    this.fulfilmentService.page$.subscribe((v) => {
      this.page = v;
    });
    this.fulfilmentService.result$.subscribe((v) => {
      this.result = v;
    });
    this.fulfilmentService.fulfillment$.subscribe((v: any) => {
      this.data = v;
    });
  }
  prev() {
    this.fulfilmentService.page$.next(this.page - 1);
    this.fulfilmentService.getfullfillment();
  }
  next() {
    this.fulfilmentService.page$.next(this.page + 1);
    this.fulfilmentService.getfullfillment();
  }
}
