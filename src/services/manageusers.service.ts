import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { API } from '../utils/constants';
import { BrandService } from './brand.service';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ManageusersService {
  users$ = new BehaviorSubject([]);
  page$ = new BehaviorSubject(1);
  result$ = new BehaviorSubject(10);

  constructor(
    private brandService: BrandService,
    private messageService: MessageService
  ) {}

  async getManageUsers() {
    // tailwind css pagination
    // https://pos-gxtx.onrender.com/api/v1/admin/getall?page=2&result=10
    try {
      const response = await axios.get(
        API.BASE_URL +
          API.MANAGEUSERS.GET_ALL +
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
        this.users$.next(response.data);
      } else {
        this.messageService.add({
          severity: 'error',
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
