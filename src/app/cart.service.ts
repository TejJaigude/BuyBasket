import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();
  

  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    const currentCart = [...this.cart.value];  // ✅ clone the array
    const existingItem = currentCart.find(item => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
  
    this.cart.next(currentCart);  // ✅ emit a new reference
  }
  
  removeFromCart(productId: number) {
    const updatedCart = this.cart.value.filter(item => item.id !== productId);
    this.cart.next(updatedCart);
  }

  increaseQuantity(productId: number) {
    const currentCart = this.cart.value;
    const product = currentCart.find(item => item.id === productId);
    if (product) {
      product.quantity += 1;
      this.cart.next(currentCart);
    }
  }

  decreaseQuantity(productId: number) {
    const currentCart = this.cart.value;
    const product = currentCart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
      product.quantity -= 1;
      this.cart.next(currentCart);
    }
  }

  clearCart() {
    this.cart.next([]);
  }

  updateCart(cartItems: any[]) {
    this.cart.next(cartItems);
  }

  saveCart(cartItems: any[]) {
    return this.http.post('/api/cart-items/', cartItems);
  }

  placeOrder(orderData: any) {
    return this.http.post('/api/orders/', orderData);
  }
}
