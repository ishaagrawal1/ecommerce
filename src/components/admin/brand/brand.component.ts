import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FloatLabelModule,
    InputTextareaModule,
    ReactiveFormsModule,
    CheckboxModule,
  ],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css',
})
export class BrandComponent implements OnInit {
  brands: any = [];
  brandById: any = {};
  visible: boolean = false;
  addLoading: boolean = false;
  brandForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl(''),
    note: new FormControl(''),
  });

  constructor(
    public brandservice: BrandService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.brandservice.getBrands();
    this.brandservice.brands$.subscribe((b: any) => {
      this.brands = b;
      this.visible = false;
      this.brandForm.reset();
      console.log(this.brands);
    });
    this.brandservice.addLoading$.subscribe((v: boolean) => {
      this.addLoading = v;
    });
    this.brandservice.brandById$.subscribe((v: any) => {
      this.brandById = v;
      if (v._id) {
        this.brandForm.setValue({
          name: v.name,
          description: v.description,
          note: v.note,
        });
      } else {
        this.brandForm.reset();
      }
    });
  }
  submit() {
    if (this.brandById._id) {
      this.brandservice.editBrand(this.brandById._id, this.brandForm.value);
    } else {
      this.brandservice.postbrand(this.brandForm.value);
    }
  }
  deleteBrand(e: Event, id: string) {
    this.confirmationService.confirm({
      target: e.target as EventTarget,
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        console.log('delete', id);
        this.brandservice.deleteBrand(id);
      },
      reject: () => {
        console.log('reject');
      },
    });
  }
  editBrand(id: string) {
    this.brandservice.getById(id);
    this.visible = true;
  }
}
