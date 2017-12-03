import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.sevice';


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string;
  pageTitle: string = 'Product Detail ';
  imageWidth : number = 200;
  imageMargin : number = 10;
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService: ProductService) {
    
   }

  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    let id = +this._route.snapshot.paramMap.get('id'); // '+' convert to number
    this.pageTitle;
    this._productService.getProduct(id).subscribe(
      product=>this.product = product,
      error =>this.errorMessage = <any>error
    );
    console.log("In OnInit ProductDetailComponent!");
  }

  onBack(): void{
    this._router.navigate(['/products']);
  }
}
