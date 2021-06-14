import { Component, OnInit, Input } from '@angular/core';
import { ProjectBoard } from 'src/app/models/ProjectBoard';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Milestone } from 'src/app/models/Milestone';
import { MilestoneService } from 'src/app/services/milestone.service';

@Component({
  selector: 'app-project-board',
  templateUrl: './project-board.component.html',
  styleUrls: ['./project-board.component.css']
})
export class ProjectBoardComponent implements OnInit {
  @Input() board: ProjectBoard;

  constructor(private milestoneService: MilestoneService) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    // This is where you send an http req to server to update project
  }

  selectMilestone(milestone: Milestone) {
    this.milestoneService.setSelectedMilestone(milestone);
    console.log(milestone.name);
  }

}
