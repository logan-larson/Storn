import { Component, OnInit, Input } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.css']
})
export class ProjectTreeComponent implements OnInit {

  classes: ClassItem[] = [];
  showAddClassComponent: boolean = false;

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.getClasses((classes) => {
      this.classes = classes;
    })
  }

  logoutGithub() {
    this.authService.logoutGithub();
  }

  removeClass(classItem: ClassItem) {
    console.log(classItem)
    this.classes = this.classes.filter(c => c != classItem);
  }
}