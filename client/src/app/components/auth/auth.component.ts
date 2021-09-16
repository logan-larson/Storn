import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  loginWithGithub() {
    //this.authService.loginWithGithub();
  }

  login() {
    console.log(this.password);
    this.authService.login(this.username, this.password);
  }

  register() {
    this.authService.register(this.username, this.password);
  }
}
