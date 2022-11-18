import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment';

declare let google: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  id_token: any;
  user = {
    email: '',
    name: '',
    password: ''
  };

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe({
        next: res => {
          localStorage.setItem('token', JSON.stringify(res));
          this.router.navigate(['/pokemons']);
        },
        error: error => {
          this.error = error.error.errorMessage
          console.log(error)
        }
      })
  }

  handlebutton() {
    google.accounts.id.initialize({
      client_id: "740318884924-9lt1fte795kda4k5urup36fcpsl1bdhl.apps.googleusercontent.com",
      callback: this.signUp
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();
  }

  signUp(response: any) {
    if (response.credential) {
      this.id_token = response.client_id
      localStorage.setItem("token", response.credential)
      document.location.href = "/pokemons"
    }
  }

}
