import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';
import { MessageService } from 'primeng/api';
import { API } from '../utils/constants';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  brandById$: any = new BehaviorSubject({});
  brands$: any = new BehaviorSubject<any>([]);
  config$: any = new BehaviorSubject({
    headers: {
      Authorization: `Bearer ${localStorage.getItem('auth')}`,
    },
  });
  addLoading$: any = new BehaviorSubject(false);
  constructor(private msgService: MessageService) {}

  async getBrands() {
    try {
      const result = await axios.get(
        API.BASE_URL + API.BRAND.GET_ALL,
        this.config$.value
      );
      console.log(result.data);
      this.brands$.next(result.data.brands);
      if (result.status === 200) {
        this.msgService.add({
          severity: 'success',
          summary: 'Success',
          detail: result.data.msg,
        });
      } else {
        this.msgService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: result.data.msg,
        });
      }
    } catch (error: any) {
      console.log(error);
      this.msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: error?.response.data.msg,
      });
    }
  }
  async postbrand(data: any) {
    this.addLoading$.next(true);
    try {
      const response = await axios.post(
        API.BASE_URL + API.BRAND.GET_ALL,
        data,
        this.config$.value
      );
      if (response.status === 201) {
        this.msgService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        this.brands$.next([...this.brands$.value, response.data.brand]);
      } else {
        this.msgService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: response.data.msg,
        });
      }
      console.log(response);
    } catch (error: any) {
      this.msgService.add({
        severity: 'error',
        summary: 'Error',
        detail: error?.response.data.msg,
      });
      console.log(error);
    }
    this.addLoading$.next(false);
  }
  async deleteBrand(id: string) {
    try {
      const response = await axios.delete(
        API.BASE_URL + API.BRAND.GET_ALL + `/${id}`,
        this.config$.value
      );
      console.log(response);
      if (response.status === 200) {
        this.msgService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
        const updatedBrands = this.brands$.value.filter(
          (b: any) => b._id !== id
        );
        this.brands$.next(updatedBrands);
      } else {
        this.msgService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: response.data.msg,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id: string) {
    try {
      const response = await axios.get(
        API.BASE_URL + API.BRAND.GET_ALL + `/${id}`,
        this.config$.value
      );
      console.log(response);
      if (response.status === 200) {
        this.brandById$.next(response.data.brand);
      } else {
        this.brandById$.next({});
      }
    } catch (error) {
      console.log(error);
    }
  }
  async editBrand(id: string, data: any) {
    try {
      const response = await axios.patch(
        API.BASE_URL + API.BRAND.GET_ALL + `/${id}`,
        data,
        this.config$.value
      );
      if (response.status === 200) {
        this.getBrands();
      }
      this.msgService.add({
        severity: 'info',
        summary: 'Info',
        detail: response.data.msg,
      });
      this.brandById$.next({});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
}
