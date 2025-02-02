import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { VariationService } from '../../../services/variation.service';

@Component({
  selector: 'app-variations',
  standalone: true,
  imports: [ButtonModule, TagModule, CommonModule, TableModule],
  templateUrl: './variations.component.html',
  styleUrl: './variations.component.css',
})
export class VariationsComponent implements OnInit {
  variations = [];
  constructor(private variationService: VariationService) {
    this.variationService.getVariations();
  }
  ngOnInit(): void {
    this.variationService.variations$.subscribe((v: any) => {
      this.variations = v;
    });
  }
}
