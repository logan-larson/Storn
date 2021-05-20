import { Component, OnInit, Input } from '@angular/core';
import { ClassItem } from 'src/app/models/ClassItem';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-project-tree',
  templateUrl: './project-tree.component.html',
  styleUrls: ['./project-tree.component.css']
})
export class ProjectTreeComponent implements OnInit {

  classes: ClassItem[] = [];
  showAddClassComponent: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getClasses((classes) => {
      this.classes = classes;
    })
  }
}