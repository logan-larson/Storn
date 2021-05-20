import { Component, Input, OnInit } from '@angular/core';
import { ProjectItem } from 'src/app/models/ProjectItem';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() project: ProjectItem;

  constructor() { }

  ngOnInit(): void {
  }

}