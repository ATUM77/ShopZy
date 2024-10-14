import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css'] // Corrected the typo from "styleUrl" to "styleUrls"
})
export class CategoryProductsComponent implements OnInit {
  productList: any[] = [];
  categoryList: any[] = [];
  filterdProducts: any[] = [];
  productId: string | null = null; // Changed type to match expected param type

  // Inject ProductService and ActivatedRoute
  constructor(private prodSrv: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllProducts();
  
    this.getProductIdFromRoute();
  }

  getAllProducts(): void {
    this.prodSrv.getProducts().subscribe((res: any) => {
      this.filterdProducts = res.data.filter((list: any) => list.categoryId === Number(this.productId)); // Ensure categoryId matches the productId
      console.log(this.filterdProducts);
      this.productList = this.filterdProducts; // Assign the filtered products
    });
  }

  getProductIdFromRoute(): void {
    // Subscribe to the paramMap observable to get the id
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id'); // Get the route parameter 'id'
      
    });
  }









  
}
