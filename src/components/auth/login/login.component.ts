import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  isLoading = false;
  LoginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(public router: Router, private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.LoginForm.value);
  }
  ngOnInit(): void {
    this.authService.isLoading$.subscribe((v) => {
      this.isLoading = v;
    });
    this.authService.isLoggesIn$.subscribe((v) => {
      if (v) {
        this.router.navigateByUrl('/profile');
      }
    });
  }
}
