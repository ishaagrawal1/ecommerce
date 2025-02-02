import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Tag, TagModule } from 'primeng/tag';
import { CategoryService } from '../../../services/category.service';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ButtonModule, TagModule, TableModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  category = [];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories();
  }

  ngOnInit(): void {
    this.categoryService.category$.subscribe((v: any) => {
      this.category = v;
    });
  }
}
