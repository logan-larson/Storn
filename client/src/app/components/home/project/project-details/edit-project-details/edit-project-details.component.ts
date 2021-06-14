import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project-details',
  templateUrl: './edit-project-details.component.html',
  styleUrls: ['./edit-project-details.component.css']
})
export class EditProjectDetailsComponent implements OnInit {

  @Input() projectName: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      // Gotta be a better way to optimize this
      // For now it is anything that can be clicked in the edit project
      // details pop up
      event.target != document.getElementById('header')
      && event.target != document.getElementById('content')
      && event.target != document.getElementById('projectName')
      && event.target != document.getElementById('saveProjectDetails')
      && event.target != document.getElementById('editProjectDetails')
    ) {
      console.log(event.target);
      this.close.emit("close me");
    }
  }

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  saveProjectDetails() {
    this.projectService.saveProjectDetails(() => {
      console.log("saved");
      this.close.emit("close me");
    });
  }

}
