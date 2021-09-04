import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: Project;

  @Output() selectedProject: EventEmitter<Project> = new EventEmitter<Project>();

  constructor(private projectService: ProjectService) {
    this.projectService.updateDetailsEmitter.subscribe((id) => {
      this.projectService.getProjectById(id, (project) => {
        this.project = project;
      });
    })
  }

  ngOnInit(): void {
  }

  selectProject() {
    this.projectService.setSelectedProject(this.project._id);
  }

}
