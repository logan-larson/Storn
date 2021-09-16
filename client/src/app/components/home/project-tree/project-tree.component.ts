import { Component, OnInit, Input } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';
import { AuthService } from 'src/app/services/auth.service';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.css'],
})
export class ProjectTreeComponent implements OnInit {
  classes: ClassItem[] = [];
  showAddClassComponent: boolean = false;

  constructor(
    private classService: ClassService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.classService.getClasses((classes) => {
      this.classes = classes;
    });
  }

  logoutGithub() {
    this.authService.logout();
  }

  getClasses() {
    this.classService.getClasses((classes) => {
      this.classes = classes;
    });
  }

  removeClass(classItem: ClassItem) {
    this.classes = this.classes.filter((c) => c != classItem);
  }
}
