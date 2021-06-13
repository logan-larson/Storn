import { Component, OnInit, Input } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ProjectDetails } from 'src/app/models/ProjectDetails';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() details: ProjectDetails;
  selected: boolean = false;
  showEditProjectDetailsComponent: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  changeSelected() {
    this.selected = !this.selected;
  }

  editProjectDetails() {
    this.showEditProjectDetailsComponent = true;
  }

  closeEditProjectDetails() {
    this.showEditProjectDetailsComponent = false;
  }

}
