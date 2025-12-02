import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-landing',
  standalone: true,
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent {
  constructor(private router: Router) {}

  reportIncident() {
    this.router.navigate(['/user']); // this opens the user layout (sidebar) on Home/Add Report etc
  }
}
