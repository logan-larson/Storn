import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

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

  loginWithGithub(cb) {
    // Probably going to pull the secret from the server at some point

    this.document.location.href = `https://github.com/login/oauth/authorize?client_id=${this.githubClientId}`;
    // this.router.navigateByUrl(`https://github.com/login/oauth/authorize?client_id=${this.githubClientId}`)

    /*
    this.http.get('/api/v1/login/github').subscribe(() => {
      cb();
    })
    */
  }

  setGithubCode(code: string) {
    this.http.post(`https://github.com/login/oauth/access_token?client_id`, { 
      client_id: this.githubClientId,
      client_secret: this.githubClientSecret,
      code: code

    }).subscribe((res) => {
      console.log(res);
    });
    
    console.log("code: " + code);
  }
}
