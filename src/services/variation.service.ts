import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BrandService } from './brand.service';
import { MessageService } from 'primeng/api';
import axios from 'axios';
import { API } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class VariationService {
  variations$ = new BehaviorSubject([]);

  constructor(
    private brandService: BrandService,
    private messageService: MessageService
  ) {}
  async getVariations() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.VARIATIONS.GET_ALL,
        this.brandService.config$.value
      );
      console.log(response.data);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.variations$.next(response.data.variations);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: response.data.msg,
        });
      }
    } catch (error: any) {
      console.log(error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.response.data.msg,
      });
    }
  }
}
