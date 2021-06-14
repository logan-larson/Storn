import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectItem } from 'src/app/models/ProjectItem';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: ProjectItem;

  @Output() selectedProject: EventEmitter<ProjectItem> = new EventEmitter<ProjectItem>();

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  selectProject() {
    this.projectService.setSelectedProject(this.project.id);
  }

}
