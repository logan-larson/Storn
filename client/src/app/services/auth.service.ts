import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /*
  loginWithGithub() {
    // Navigate to github authorization page

    // Pull client id from server
    let githubClientId: string = 'd0a4be1267ced10edef1';

    //this.document.location.href = `https://github.com/login/oauth/authorize?client_id=${githubClientId}`;
    console.log('navigating to github auth\n');
    this.http.get(`/api/v1/github/login?${githubClientId}`).subscribe(() => {
      this.router.navigateByUrl('/home');
    });
  }


  setGithubCode(code: string) {
    // This is triggered by the initialization of the github/callback component
    // On response the user is sent to home
    console.log(`setting code: ${code}\n`);
    this.http
      .post(`/api/v1/auth/github/callback`, { code: code })
      .subscribe((res: Message) => {
        if (res.err) {
          this.router.navigateByUrl('/auth');
        } else {
          this.router.navigateByUrl('/home');
        }
      });
  }
  */

  login(username: string, password: string) {
    this.http
      .post('/api/v1/auth/login', { username: username, password: password })
      .subscribe((res: Message) => {
        if (res.err) {
          this.router.navigateByUrl('/auth');
        } else {
          this.router.navigateByUrl('/home');
        }
      });
  }

  register(username: string, password: string) {}

  logout() {
    this.http.post('/api/v1/auth/logout', '').subscribe((res: Message) => {
      this.router.navigateByUrl('/auth');
    });
  }

  validateUser() {
    this.http.get('/api/v1/auth/validate').subscribe((res: Message) => {
      if (res.err) {
        this.logout();
      }
    });
  }
}
