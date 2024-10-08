import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../Models/user.model';
import { AuthService } from '../Services/auth.service';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  @ViewChild('signupForm') signupForm!: NgForm;
  ngAfterViewInit() {
    console.log(this.signupForm);
  }

  onFormSubmit() {
    console.log(this.signupForm.value);
    let data: User = this.signupForm.value;
    this.userService.createUser(data);
    // this.authService.signUp(data).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   complete: () => console.log('observable complete'),
    //   error: (error) => {
    //     console.log('error in signing up', error.error.err);
    //   },
    // });
    // this.onFormReset();
    console.log('form sublitted');
    this.router.navigate(['/home']);
  }
  canDeactivate() {
    if ('some logic to deactivate routing.. ') {
      return true;
    }
    return false;
  }
  onFormReset() {
    console.log('Form reset');
    // this.signupForm.reset();
  }
}
