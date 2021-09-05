import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { ProjectDetailsComponent } from './components/home/project/project-details/project-details.component';
import { ProjectBoardComponent } from './components/home/project/project-board/project-board.component';
import { MilestoneDetailsComponent } from './components/home/project/milestone-details/milestone-details.component';
import { EditProjectDetailsComponent } from './components/home/project/project-details/edit-project-details/edit-project-details.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectTimerComponent } from './components/home/project/project-timer/project-timer.component';

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
    CallbackGithubComponent,
    ProjectDetailsComponent,
    ProjectBoardComponent,
    MilestoneDetailsComponent,
    EditProjectDetailsComponent,
    ProjectTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
