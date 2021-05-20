import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AuthComponent } from 'src/app/components/auth/auth.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
  },
  { 
    path: 'login', 
    component: AuthComponent,
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
