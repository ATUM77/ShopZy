import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent {
  productList: any[] = [];
  categoryList: any[] = [];
  http: any;
product: any;

  constructor(private prodSrv: ProductService){
    

  }
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();

  }

  pp() {
    this.http.get('https://freeapi.gerasim.in/api/BigBasket/GetAllProducts').subscribe((res: any) => {
      if (res.result) {
        console.log(res.data);
      }
    }, (err: any) => {
      console.log('Error from api ' + err.message);
    });
  }


  getAllCategory() {
    this.prodSrv.getCategory().subscribe((res: any) => {
      this.categoryList = res.data.filter((list: any) => list.parentCategoryId === 0);
    });
  }
  getAllProducts() {
    this.prodSrv.getProducts().subscribe((res: any) => {
      this.productList = res.data;  // Assign the result to the products array
    });
  }
  
}
