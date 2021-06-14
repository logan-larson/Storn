import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { CallbackGithubComponent } from 'src/app/components/auth/callback-github/callback-github.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
  },
  { 
    path: 'auth', 
    component: AuthComponent,
  },
  /*
  Putting this functionality in HomeComponent ngOnInit()
  Check that should do individual routes for each service I auth with
  */
  {
    path: 'auth/callback/github',
    component: CallbackGithubComponent,
  },
  { 
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
