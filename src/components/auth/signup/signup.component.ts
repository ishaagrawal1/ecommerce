import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    PasswordModule,
    FloatLabelModule,
    SelectButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  isLoading = false;
  pMValidator: ValidatorFn = (control) => {
    return control.value.password === control.value.confirmpassword
      ? null
      : { pMatchError: true };
  };
  SignupForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      typeofuser: new FormControl('user', Validators.required),
    },
    { validators: this.pMValidator }
  );

  constructor(public router: Router, private authService: AuthService) {}
  onSubmit() {
    this.authService.Signup(this.SignupForm.value);
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
