import { ProductsService } from './../products.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.module';

@Component({
  selector: 'app-products-creat',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreatComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

  constructor(private productsService: ProductsService,
     private router: Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productsService.create(this.product).subscribe(() => {
      this.productsService.showMessage('Produto criado.')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
