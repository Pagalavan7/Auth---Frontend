import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('loginUser') loginUser!: NgForm;
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  onSubmit() {
    console.log(this.loginUser.value);
    const user = this.loginUser.value;

    this.authService.login(user).subscribe({
      next: (response) => {
        console.log(response);
        alert(response.message);
        this.router.navigate(['/posts']);
      },
      error: (err) => {
        console.log(err.error);
        alert(err.error.error);
      },
      complete: () => console.log('login operation complete'),
    });
  }

  resetForm() {
    this.loginUser?.reset();
  }
}
