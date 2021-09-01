import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';
import { Project } from 'src/app/models/Project';
import { ClassService } from 'src/app/services/class.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {

  @Input() classItem: ClassItem;
  @Output() deletedClass: EventEmitter<ClassItem> = new EventEmitter();
  selected: boolean = false;
  showAddProjectComponent: boolean = false;
  projects: Project[];


  // We'll see if this is necessary after host listener on child component
  /*
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      event.target != document.getElementById('addProjectButton')
    ) {
      this.showAddProjectComponent = false;
    }
  }
  */

  constructor(private classService: ClassService, private projectService: ProjectService) { }

  ngOnInit(): void {
    // Udpate class color
    // bind background color
    this.projectService.getProjects(this.classItem, (projects) => {
      this.projects = projects; 
    })
  }

  changeView() {
    this.selected = !this.selected;
  }

  addProject() {
    this.showAddProjectComponent = true;
  }

  closeAddProject() {
    this.showAddProjectComponent = false;
  }

  removeClass() {
    this.classService.deleteClass(this.classItem, () => {
      this.deletedClass.emit(this.classItem);
    });
  }

}