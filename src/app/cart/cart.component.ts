import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private c: CartService) {}

  ngOnInit() {
    this.c.cart$.subscribe((items: any[]) => {
  this.cartItems = items;
  this.calculateTotal();
});

  }

  calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }


  increaseQuantity(item: any) {
    item.quantity++;
    this.c.updateCart(this.cartItems);
    this.calculateTotal();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.c.updateCart(this.cartItems);
      this.calculateTotal();
    }
  }

  removeItem(item: any) {
    const updatedCart = this.cartItems.filter(i => i.id !== item.id);
    this.c.updateCart(updatedCart);
    this.calculateTotal();
  }

  clearCart() {
    this.c.clearCart();
    this.calculateTotal();
  }
}


