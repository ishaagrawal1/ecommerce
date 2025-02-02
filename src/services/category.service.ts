import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { BrandService } from './brand.service';
import axios from 'axios';
import { API } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  category$ = new BehaviorSubject([]);
  constructor(
    private messageService: MessageService,
    private brandService: BrandService
  ) {}
  async getCategories() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.CATEGORIES.GET_ALL,
        this.brandService.config$.value
      );
      console.log(response.data);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.category$.next(response.data.categories);
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Error',
          detail: response.data.msg,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
