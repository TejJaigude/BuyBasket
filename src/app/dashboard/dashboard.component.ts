import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="container mt-5">
      <h2>Welcome to your dashboard!</h2>
      <p>This page is protected and only visible to logged-in users.</p>
    </div>
  `
})
export class DashboardComponent {}

