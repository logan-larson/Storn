import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetails } from 'src/app/models/ProjectDetails';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() details: ProjectDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
