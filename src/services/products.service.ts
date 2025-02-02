import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { BrandService } from './brand.service';
import axios from 'axios';
import { API } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product$ = new BehaviorSubject([]);
  page$ = new BehaviorSubject(1);
  result$ = new BehaviorSubject(10);

  constructor(
    private messageService: MessageService,
    private brandService: BrandService
  ) {}

  async getproducts() {
    try {
      const response = await axios.get(
        API.BASE_URL +
          API.PRODUCTS.GET_ALL +
          `?page=${this.page$.value}&result=${this.result$.value}`,
        this.brandService.config$.value
      );
      console.log(response.data);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.product$.next(response.data);
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: response.data.msg,
        });
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Error fetching products',
      });
      console.log(error.response.data.msg);
    }
  }
}
