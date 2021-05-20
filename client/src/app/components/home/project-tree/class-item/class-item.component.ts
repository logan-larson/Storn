import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {

  @Input() class: ClassItem;
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

  constructor() { }

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

}