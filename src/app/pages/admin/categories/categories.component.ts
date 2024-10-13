import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, TableModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  products$: Observable<any> | undefined;
  isSidePanel: boolean = false;
  categoryObj: categoryObject = new categoryObject();
  isApiCallInProgress: boolean = false;

  constructor(private productSrv: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.products$ = this.productSrv.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  saveCategory() {
    if (this.isApiCallInProgress) return;

    this.isApiCallInProgress = true;
    this.productSrv.createCategory(this.categoryObj).subscribe({
      next: (res: any) => {
        this.isApiCallInProgress = false;
        if (res.result) {
          this.toastr.success('Category Created Successfully');
          this.reset();
          this.getAllCategory();
        } else {
          this.toastr.error(res.message);
        }
      },
      error: (error: any) => {
        this.isApiCallInProgress = false;
        this.toastr.error('Failed to create category');
      }
    });
  }

  onDelete (categoryId: number) {
    const isDelete = confirm('Are you Sure want to delete?');
    if (isDelete) {
      this.productSrv.deleteCategory(categoryId).subscribe((res: any) => {
        if (res.result) {
          this.toastr.success("Category Deleted Successfully");
          this.getAllCategory();
        } else {
          this.toastr.error(res.message);
        }
      });
    }
  }

  updateCategory() {
    if (!this.isApiCallInProgress) {
      this.isApiCallInProgress = true;
      this.productSrv.createCategory(this.categoryObj).subscribe((res: any) => {
        if (res.result) {
          this.isApiCallInProgress = false;
          this.toastr.success('Category Updated Successfully');
          this.reset();
          this.getAllCategory();
        } else {
          this.isApiCallInProgress = false;
          this.toastr.error(res.message);
        }
      }, (err: any) => {
        this.isApiCallInProgress = false;
        this.toastr.error(err.message);
      })
    }
  }

  onEdit(item: any) {
    this.categoryObj = item;
    this.isSidePanel = true;
  }


  reset() {
    this.categoryObj = new categoryObject();
    this.isSidePanel = false;
  }
}

export class categoryObject {
  categoryId: number;
  categoryName: string;
  parentCategoryId: number;

  constructor() {
    this.categoryId = 0;
    this.categoryName = '';
    this.parentCategoryId = 0;
  }
}