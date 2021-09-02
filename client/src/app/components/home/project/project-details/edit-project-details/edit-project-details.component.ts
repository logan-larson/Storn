import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ProjectDetails } from 'src/app/models/ProjectDetails';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project-details',
  templateUrl: './edit-project-details.component.html',
  styleUrls: ['./edit-project-details.component.css']
})
export class EditProjectDetailsComponent implements OnInit {

  @Input() details: ProjectDetails;
  name: String;
  deadline: Date;
  timeHours: Number;
  timeMinutes: Number;


  @Output() close: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      // Gotta be a better way to optimize this
      // For now it is anything that can be clicked in the edit project
      // details pop up
      event.target != document.getElementById('header')
      && event.target != document.getElementById('content')
      && event.target != document.getElementById('name')
      && event.target != document.getElementById('deadline')
      && event.target != document.getElementById('timeHours')
      && event.target != document.getElementById('timeMinutes')
      && event.target != document.getElementById('nameLabel')
      && event.target != document.getElementById('deadlineLabel')
      && event.target != document.getElementById('timeHoursLabel')
      && event.target != document.getElementById('timeMinutesLabel')
      && event.target != document.getElementById('saveProjectDetails')
      && event.target != document.getElementById('editProjectDetails')
    ) {
      this.close.emit("close me");
    }
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.name = this.details.name;
    this.deadline = this.details.deadline;
    this.timeHours = this.details.totalTimeEstimated.hours;
    this.timeMinutes = this.details.totalTimeEstimated.minutes;
  }

  saveProjectDetails() {
    this.projectService.saveProjectDetails(this.name, this.deadline, this.timeHours, this.timeMinutes, () => {
      this.close.emit("close me");
    });
  }

}
