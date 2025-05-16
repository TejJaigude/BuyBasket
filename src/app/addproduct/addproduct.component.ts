import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  product = {
    id: '',
    name: '',
    description: '',
    price: null,
    stock: null,
  };

  constructor(private s: ProductserviceService,private route:Router){}

  onSubmit()
  {
    this.s.addProducts(this.product).subscribe({
      next:(res)=>{
        alert("Product added successfully")
        this.route.navigate(['/products'])
      },
      error:(error)=>{
        alert(error)
      }
    })
  }

}
