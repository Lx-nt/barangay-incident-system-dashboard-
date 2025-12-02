import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    // Clear any previous login session
    this.clearUserData();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;

      console.log('Login successful:', { username });

      // Store login data
      localStorage.setItem('currentUser', JSON.stringify({
        username,
        loggedIn: true,
        loginTime: new Date().toISOString()
      }));

      // 🔵 Redirect user to the PUBLIC landing page (Screenshot #1)
      this.router.navigate(['/user-landing']);

    } else {
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
    }
  }

  private clearUserData() {
    localStorage.removeItem('currentUser');
  }
}
