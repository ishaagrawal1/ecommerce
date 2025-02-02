import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { items, ItemsAdmin, ItemsSeller } from '../../utils/menu';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, PanelMenuModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  menuItemArr: any = null;
  account: any = [
    { label: 'My Account', icon: 'pi pi-user', routerLink: '/login' },
  ];
  constructor(private authService: AuthService) {
    this.authService.user$.subscribe((u: any) => {
      switch (u?.typeofuser) {
        case 'admin':
          this.menuItemArr = ItemsAdmin;
          break;
        case 'seller':
          this.menuItemArr = ItemsSeller;
          break;
        default:
          this.menuItemArr = items;
          break;
      }
    });
  }
}
