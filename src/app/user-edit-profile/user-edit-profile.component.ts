import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit-profile.component.html',
  styleUrls: ['./user-edit-profile.component.css']
})
export class UserEditProfileComponent {
  name = 'Leomark Samar';
  role = 'Barangay Captain';
  newPassword = '';
  confirmPassword = '';

  constructor(private router: Router) {}

  save() {
    alert('Profile updated!');
    this.router.navigate(['/user/settings']);
  }
}
