import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { API } from '../utils/constants';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: any = new BehaviorSubject({});
  isLoading$ = new BehaviorSubject(false);
  isLoggesIn$ = new BehaviorSubject(false);

  constructor(private messageService: MessageService) {
    this.loggedIn();
  }

  async login(data: any) {
    this.isLoading$.next(true);
    try {
      const response = await axios.post(API.BASE_URL + API.AUTH.LOGIN, data);
      console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem('auth', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        this.isLoggesIn$.next(true);
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: response.data.msg,
        });
      }
    } catch (error: any) {
      console.log(error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error?.response?.msg,
      });
    }
    this.isLoading$.next(false);
  }

  async Signup(data: any) {
    this.isLoading$.next(true);
    try {
      const response = await axios.post(
        `${API.BASE_URL + API.AUTH.SIGNUP}`,
        data
      );
      console.log(response.data);
      if (response.status === 200) {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.data.msg,
        });
      } else {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: response.data.msg,
        });
      }
    } catch (error: any) {
      console.log(error);
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error?.response?.msg,
      });
    }
    this.isLoading$.next(false);
  }

  loggedIn(): void {
    const token = localStorage.getItem('auth');
    const user = localStorage.getItem('user');
    if (token && user) {
      this.isLoggesIn$.next(true);
      this.user$.next(JSON.parse(user));
    } else {
      this.isLoggesIn$.next(false);
      this.user$.next({});
    }
  }
  logout(): void {
    localStorage.clear();
    this.loggedIn();
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Logged out successfully.',
    });
  }
}
