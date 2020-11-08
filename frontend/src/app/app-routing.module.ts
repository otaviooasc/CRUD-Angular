import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./views/home/home.component";
import {ProductCrudComponent} from "./views/product-crud/product-crud.component";
import { ProductsCreatComponent } from './components/products/products-create/products-create.component';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
   path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductsCreatComponent
  },
  {
    path: "products/update/:id",
    component: ProductsUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductsDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
