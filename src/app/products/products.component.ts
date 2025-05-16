import { Component,OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  searchText: string = '';
  sortOption: string = '';

  constructor(private s : ProductserviceService, private c :CartService){}


  filteredProducts() {
    let products = this.newProducts || [];

  // Filtering
  if (this.searchText) {
    products = products.filter((product: { name: string; }) => 
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  // Sorting
  if (this.sortOption === 'priceLow') {
    products = products.sort((a: { price: number; }, b: { price: number; }) => a.price - b.price);
  } else if (this.sortOption === 'priceHigh') {
    products = products.sort((a: { price: number; }, b: { price: number; }) => b.price - a.price);
  } else if (this.sortOption === 'nameAsc') {
    products = products.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
  } else if (this.sortOption === 'nameDesc') {
    products = products.sort((a: { name: any; }, b: { name: string; }) => b.name.localeCompare(a.name));
  }

  return products;
}

  addToCart(product: any) {
    this.c.addToCart(product);
    alert("Product added to cart!");
  }

  newProducts:any
  ngOnInit(...args: []): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.s.getProducts().subscribe({
      next: (res) => {
        this.newProducts = res;
      },
      error: (err) => {
        alert('Failed to load products');
        console.error(err);
      }
    });
  }

  deleteProduct(id: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.s.deleteProduct(id).subscribe({
        next: () => this.loadProducts(),
        error: () => alert('Failed to delete product')
      });
    }
  }

}
