import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ManageusersService } from '../../../services/manageusers.service';

@Component({
  selector: 'app-manageusers',
  standalone: true,
  imports: [ButtonModule, TagModule, TableModule, CommonModule],
  templateUrl: './manageusers.component.html',
  styleUrl: './manageusers.component.css',
})
export class ManageusersComponent implements OnInit {
  data: any = {};
  page: number = 1;
  rows: number = 10;
  constructor(private manageUsers: ManageusersService) {
    this.manageUsers.getManageUsers();
  }
  ngOnInit(): void {
    this.manageUsers.users$.subscribe((v: any) => {
      this.data = v;
    });
    this.manageUsers.page$.subscribe((v: any) => {
      this.page = v;
    });
    this.manageUsers.result$.subscribe((v: any) => {
      this.rows = v;
    });
  }
  next(): void {
    this.manageUsers.page$.next(this.page + 1);
    this.manageUsers.getManageUsers();
  }
  previous(): void {
    this.manageUsers.page$.next(this.page - 1);
    this.manageUsers.getManageUsers();
  }
}
