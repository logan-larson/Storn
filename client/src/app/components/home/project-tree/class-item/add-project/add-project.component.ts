import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  @Input() class: ClassItem;
  @Input() projectName: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      // Gotta be a better way to optimize this
      event.target != document.getElementById('header')
      && event.target != document.getElementById('content')
      && event.target != document.getElementById('projectName')
      && event.target != document.getElementById('addProject')
      && event.target != document.getElementById('addProjectButton')
    ) {
      console.log(event.target);
      this.close.emit("close me");
    }
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Focus on input
  }

  addProject() {

    this.userService.addProject(this.class, this.projectName, () => {
      this.close.emit("close me");
    });
  }

}
