import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ProjectDetails } from 'src/app/models/ProjectDetails';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() details: ProjectDetails;
  @Output() removeProjectEmitter: EventEmitter<String> = new EventEmitter();
  selected: boolean = false;
  showEditProjectDetailsComponent: boolean = false;


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  changeSelected() {
    this.selected = !this.selected;
  }

  removeProject() {
    this.removeProjectEmitter.emit("delete me");
  }

}
