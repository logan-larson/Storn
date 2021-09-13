import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { ProjectDetails } from 'src/app/models/ProjectDetails';
import { ProjectService } from 'src/app/services/project.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  @Input() details: ProjectDetails;
  @Input() project: Project;
  @Output() removeProjectEmitter: EventEmitter<String> = new EventEmitter();
  selected: boolean = false;
  showEditProjectDetailsComponent: boolean = false;

  constructor(
    private projectService: ProjectService,
    public timeService: TimeService
  ) {
    this.projectService.updateDetailsEmitter.subscribe((id) => {
      this.projectService.getProjectById(id, (project) => {
        this.project = project;
      });
    });
  }

  ngOnInit(): void {}

  changeSelected() {
    this.selected = !this.selected;
  }

  removeProject() {
    this.removeProjectEmitter.emit('delete me');
  }
}
