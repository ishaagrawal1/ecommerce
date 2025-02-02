import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TaxesService } from '../../../services/taxes.service';

@Component({
  selector: 'app-taxes',
  standalone: true,
  imports: [ButtonModule, TagModule, TableModule, CommonModule],
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.css',
})
export class TaxesComponent implements OnInit {
  taxes: any = [];
  constructor(private taxService: TaxesService) {
    this.taxService.getTaxes();
  }

  ngOnInit(): void {
    this.taxService.taxes$.subscribe((v: any) => {
      this.taxes = v;
    });
  }
}
