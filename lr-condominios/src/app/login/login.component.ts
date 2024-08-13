import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  OnLoginClicked() {
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(email, password);

    if (user === undefined) alert('O usúario inforamdo está errado');

    this.router.navigate(['/content']);
  }
}
