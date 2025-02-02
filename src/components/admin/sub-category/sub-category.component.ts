import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SubcategoryService } from '../../../services/subcategory.service';

@Component({
  selector: 'app-sub-category',
  standalone: true,
  imports: [ButtonModule, TableModule, TagModule, CommonModule],
  templateUrl: './sub-category.component.html',
  styleUrl: './sub-category.component.css',
})
export class SubCategoryComponent implements OnInit {
  subcategory = [];
  constructor(private subcategoryService: SubcategoryService) {
    this.subcategoryService.getSubcategory();
  }

  ngOnInit(): void {
    this.subcategoryService.subcatgory$.subscribe((v: any) => {
      this.subcategory = v;
    });
  }
}
