import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Project } from 'src/app/models/Project';
import { ProjectDetails } from 'src/app/models/ProjectDetails';
import { ProjectService } from 'src/app/services/project.service';

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

  constructor(private projectService: ProjectService) {
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

  calculateHours(time: number) {
    console.log(time);
    return Math.floor(time / 3600000);
  }

  calculateMinutes(time: number) {
    let hours = this.calculateHours(time);
    time = time - hours * 3600000;
    return Math.floor(time / 60000);
  }

  calculateSeconds(time: number) {
    let hours = this.calculateHours(time);
    let minutes = this.calculateMinutes(time);
    time = time - hours * 3600000 - minutes * 60000;
    return Math.floor(time / 1000);
  }

  formatUnderTen(time: number) {
    let formattedTime;
    time < 10
      ? (formattedTime = '0' + time.toString())
      : (formattedTime = time.toString());
    return formattedTime;
  }
}
