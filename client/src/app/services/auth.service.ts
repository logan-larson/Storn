import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  githubClientId: string = "d0a4be1267ced10edef1";
  githubClientSecret: string = "4a8547355631aa4dc0f55186ff56e3adad2a7c3b";

  constructor(
    private router: Router,
    private http: HttpClient, 
    @Inject(DOCUMENT) private document: Document
  ) { }

  loginWithGithub() {
    // Navigate to github authorization page
    this.document.location.href = `https://github.com/login/oauth/authorize?client_id=${this.githubClientId}`;
  }

  setGithubCode(code: string) {

    // This is triggered by the initialization of the github/callback component
    // On response the user is sent to home

    this.http.post(`/api/v1/auth/github/callback`, { code: code } )
    .subscribe((res: Message) => {
      if (res.err) {
        this.router.navigateByUrl('/auth');
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }

  logoutGithub() {
    this.http.post('/api/v1/auth/github/logout', "")
    .subscribe((res: Message) => {
      this.router.navigateByUrl('/auth');
    })
  }

  validateUser() {
    this.http.get('/api/v1/auth/github/validate')
    .subscribe((res: Message) => {
      if (res.err) {
        this.logoutGithub();
      }
    })
  }
}
