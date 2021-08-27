import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: Project = {
    _id: "adsf",
    name: "This project",
    classId: "asdfa"
  };

  constructor(private projectService: ProjectService) { 
    // Can rename in future
    // Lets component know when user switches projects
    this.projectService.getProject.subscribe(() => {
      this.getProject();
    }) 
  }

  ngOnInit(): void {
    /*
    this.projectService.getSelectedProject((project) => {
      this.project = project;
    });
    */
  }

  getProject() {
    /*
    this.projectService.getSelectedProject((project) => {
      this.project = project;
    });
    */
  }

}
