import { Component } from '@angular/core';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent {

  featuredProducts: any[] = [];

  constructor(private s: ProductserviceService) {}

  ngOnInit() {
    this.s.getFeatured().subscribe(data => {
      this.featuredProducts = data;
    });
  }

}
