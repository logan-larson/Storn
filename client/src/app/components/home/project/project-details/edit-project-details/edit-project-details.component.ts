import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Project } from 'src/app/models/Project';
import { ProjectDetails } from 'src/app/models/ProjectDetails';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project-details',
  templateUrl: './edit-project-details.component.html',
  styleUrls: ['./edit-project-details.component.css'],
})
export class EditProjectDetailsComponent implements OnInit {
  @Input() details: ProjectDetails;
  @Input() project: Project;
  name: String;
  description: String;
  deadline: Date;
  timeHours: Number;
  timeMinutes: Number;

  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.name = this.details.name;
    this.description = this.details.description;
    this.deadline = this.details.deadline;
    this.timeHours = Math.floor(
      Number(this.details.totalTimeEstimated) / 3600000
    );
    this.timeMinutes = Math.floor(
      (Number(this.details.totalTimeEstimated) -
        Number(this.timeHours) * 3600000) /
        60000
    );
  }

  saveProjectDetails() {
    let t = Number(this.timeHours) * 3600000 + Number(this.timeMinutes) * 60000;
    let d: ProjectDetails = {
      name: this.name,
      description: this.description,
      deadline: this.deadline,
      totalTimeEstimated: t,
    };
    this.projectService.saveProjectDetails(this.project._id, d, () => {
      this.close.emit('close me');
    });
  }

  cancel() {
    this.close.emit('close me');
  }
}
