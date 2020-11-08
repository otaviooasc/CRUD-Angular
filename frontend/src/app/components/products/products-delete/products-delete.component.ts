import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {

  product: Product

  constructor(private productsService: ProductsService,
     private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productsService.readById(id).subscribe(product=> {
      this.product = product
    })
  }

  delete(): void{
    this.productsService.delete(this.product.id).subscribe(() => {
      this.productsService.showMessage('Produto deletado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
