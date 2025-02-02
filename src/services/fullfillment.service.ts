import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { API } from '../utils/constants';
import { BrandService } from './brand.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class FullfillmentService {
  page$ = new BehaviorSubject(1);
  result$ = new BehaviorSubject(10);
  fulfillment$ = new BehaviorSubject({});
  constructor(
    private brandService: BrandService,
    private messageService: MessageService
  ) {}

  async getfullfillment() {
    try {
      const response = await axios.get(
        API.BASE_URL +
          API.FULLORDERS.GET_ALL +
          `?sort=-createdAt&page=${this.page$.value}&result=${this.result$.value}`,
        this.brandService.config$.value
      );
      console.log(response);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.fulfillment$.next(response.data);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: response.data.msg,
        });
        this.fulfillment$.next({});
      }
    } catch (error: any) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.response.data.msg,
      });
      console.log(error);
    }
  }
}
