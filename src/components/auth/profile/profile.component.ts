import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private router: Router, public authservice: AuthService) {
    this.authservice.loggedIn();
  }

  ngOnInit(): void {
    this.authservice.isLoggesIn$.subscribe((v) => {
      if (!v) {
        this.router.navigateByUrl('/login');
      }
    });
    this.authservice.user$.subscribe((u: any) => {
      this.user = u;
    });
  }
}
