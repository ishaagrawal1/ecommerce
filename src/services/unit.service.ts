import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BrandService } from './brand.service';
import axios from 'axios';
import { API } from '../utils/constants';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  units$: any = new BehaviorSubject([]);

  constructor(
    private brandService: BrandService,
    private messageService: MessageService
  ) {}

  async getUnits() {
    try {
      const response = await axios.get(
        API.BASE_URL + API.UNIT.GET_ALL,
        this.brandService.config$.value
      );
      console.log(response.data);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.units$.next(response.data.units);
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
