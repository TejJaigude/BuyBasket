import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent {
  constructor(private route:ActivatedRoute,private s:ProductserviceService,private r:Router){}
  newid:any
  product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
  };

  ngOnInit()
  {
    this.route.paramMap.subscribe((params)=>{
      this.newid = params.get('id')
      this.getProduct()
    })
  }

  getProduct()
  {
    this.s.getProduct(this.newid).subscribe((data:any)=>{
      this.product = data
     // console.log(this.course)
    }) 
  }

  updateProduct()
  {
    this.s.updateProduct(this.product).subscribe((data)=>{
      this.r.navigate(['/products'])
      }) 
  }

}
