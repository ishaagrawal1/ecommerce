import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../../services/unit.service';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-units',
  standalone: true,
  imports: [ButtonModule, TagModule, TableModule, CommonModule],
  templateUrl: './units.component.html',
  styleUrl: './units.component.css',
})
export class UnitsComponent implements OnInit {
  units: any = [];

  constructor(private unitService: UnitService) {
    this.unitService.getUnits();
  }

  ngOnInit(): void {
    this.unitService.units$.subscribe((v: any) => {
      this.units = v;
    });
  }
}
