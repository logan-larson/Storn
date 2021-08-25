import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Udpate class color
    // bind background color
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
    this.userService.deleteClass(this.classItem, () => {
      console.log("here");
      this.deletedClass.emit(this.classItem);
    });
  }

}