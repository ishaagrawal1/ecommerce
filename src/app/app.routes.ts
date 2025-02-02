import { Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { BrandComponent } from '../components/admin/brand/brand.component';
import { ProfileComponent } from '../components/auth/profile/profile.component';
import { loggedinGuard } from '../guards/loggedin.guard';
import { UnitsComponent } from '../components/admin/units/units.component';
import { TaxesComponent } from '../components/admin/taxes/taxes.component';
import { CategoryComponent } from '../components/admin/category/category.component';
import { SubCategoryComponent } from '../components/admin/sub-category/sub-category.component';
import { VariationsComponent } from '../components/admin/variations/variations.component';
import { ManageusersComponent } from '../components/admin/manageusers/manageusers.component';
import { FulfilmentComponent } from '../components/fulfilment/fulfilment.component';
import { ProductsComponent } from '../components/products/products.component';
import { DashboardComponent } from '../components/admin/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      {
        path: 'profile',

        component: ProfileComponent,
        canActivate: [loggedinGuard],
      },
      {
        path: 'admin',
        children: [
          { path: 'brands', component: BrandComponent },
          { path: 'units', component: UnitsComponent },
          { path: 'taxes', component: TaxesComponent },
          { path: 'categories', component: CategoryComponent },
          { path: 'sub-categories', component: SubCategoryComponent },
          { path: 'variations', component: VariationsComponent },
          { path: 'users', component: ManageusersComponent },
          { path: 'fulfilment', component: FulfilmentComponent },
          { path: 'products', component: ProductsComponent },
          { path: 'dashboard', component: DashboardComponent },
        ],
      },
    ],
  },
];
