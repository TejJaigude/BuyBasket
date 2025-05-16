import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  apiUrl = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Token ${token}` // or 'Bearer' if using JWT
    });
  }

  getProducts() {
    return this.http.get(`${this.apiUrl}/products/`, {
      headers: this.getAuthHeaders()
    });
  }

  addProducts(product: any) {
    return this.http.post(`${this.apiUrl}/products/create/`, product, {
      headers: this.getAuthHeaders()
    });
  }

  updateProduct(product: any) {
    return this.http.put(`${this.apiUrl}/products/update/${product.id}/`, product, {
      headers: this.getAuthHeaders()
    });
  }

  getProduct(id: any) {
    return this.http.get(`${this.apiUrl}/products/${id}/`, {
      headers: this.getAuthHeaders()
    });
  }

  deleteProduct(id: any) {
    return this.http.delete(`${this.apiUrl}/products/delete/${id}/`, {
      headers: this.getAuthHeaders()
    });
  }

  getFeatured(): Observable<any> {
    return this.http.get(`${this.apiUrl}/featured/`, {
      headers: this.getAuthHeaders()
    });
  }
}
