import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = {
    email: '',
    name: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.signUpUser(this.user)
      .subscribe({
        next: res => {
          localStorage.setItem('token', JSON.stringify(res));
          this.router.navigate(['/pokemons']);
        },
        error: error => console.log(error)
      })
  }

}
