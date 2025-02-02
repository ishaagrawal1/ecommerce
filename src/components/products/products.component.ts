import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonModule, TagModule, TableModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  data: any = {};
  page: number = 1;
  result: number = 10;
  constructor(private productService: ProductsService) {
    this.productService.getproducts();
  }

  ngOnInit(): void {
    this.productService.product$.subscribe((v: any) => {
      this.data = v;
    });
    this.productService.page$.subscribe((v) => {
      this.page = v;
    });
    this.productService.result$.subscribe((v) => {
      this.result = v;
    });
  }
  prev() {
    this.productService.page$.next(this.page - 1);
    this.productService.getproducts();
  }
  next() {
    this.productService.result$.next(this.page + 1);
    this.productService.getproducts();
  }
}
