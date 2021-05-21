import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/home/project/project.component';
import { ProjectTreeComponent } from './components/home/project-tree/project-tree.component';
import { AddClassComponent } from './components/home/project-tree/add-class/add-class.component';
import { ClassItemComponent } from './components/home/project-tree/class-item/class-item.component';
import { AddProjectComponent } from './components/home/project-tree/class-item/add-project/add-project.component';
import { ProjectItemComponent } from './components/home/project-tree/class-item/project-item/project-item.component';
import { AuthComponent } from './components/auth/auth.component';
import { CallbackGithubComponent } from './components/auth/callback-github/callback-github.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    ProjectTreeComponent,
    AddClassComponent,
    ClassItemComponent,
    AddProjectComponent,
    ProjectItemComponent,
    AuthComponent,
    CallbackGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
