import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  user = {
    name: 'Leomark',
    email: 'leomarksamar142438@gmail.com',
    phone: '+09614672122'
  };

  reports = [
    { type: 'Fire', date: '2025-09-23', status: 'Pending' },
    { type: 'Noise Complaint', date: '2025-09-23', status: 'Resolved' },
    { type: 'Motor accident', date: '2025-09-23', status: 'Ongoing' },
    { type: 'Motor accident', date: '2025-09-23', status: 'Pending' }
  ];

  constructor(private router: Router) {}

  goToEdit() {
    this.router.navigate(['/user/settings/edit']);
  }
}
