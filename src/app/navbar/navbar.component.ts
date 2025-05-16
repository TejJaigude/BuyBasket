import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  // header.component.ts
cartItemCount: number = 0;

constructor(private c: CartService) {}

ngOnInit() {
  this.c.cart$.subscribe((items: any[]) => {
    this.cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  });
}

}
