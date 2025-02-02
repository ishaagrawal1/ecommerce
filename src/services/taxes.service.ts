import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { BrandService } from './brand.service';
import axios from 'axios';
import { API } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class TaxesService {
  taxes$: any = new BehaviorSubject([]);

  constructor(
    private messageService: MessageService,
    private brandService: BrandService
  ) {}
  async getTaxes() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.TAXES.GET_ALL,
        this.brandService.config$.value
      );

      console.log(response.data);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.taxes$.next(response.data.tax);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: response.data.msg,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
