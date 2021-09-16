import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback-github',
  templateUrl: './callback-github.component.html',
  styleUrls: ['./callback-github.component.css'],
})
export class CallbackGithubComponent implements OnInit {
  code: string;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.queryParams.subscribe((params) => {
      console.log('received code');
      this.code = params['code'];
    });
  }

  ngOnInit(): void {
    //this.authService.setGithubCode(this.code);
  }
}
