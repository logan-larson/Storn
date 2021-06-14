import { Component, OnInit } from '@angular/core';
import { Milestone } from 'src/app/models/Milestone';
import { MilestoneService } from 'src/app/services/milestone.service';

@Component({
  selector: 'app-milestone-details',
  templateUrl: './milestone-details.component.html',
  styleUrls: ['./milestone-details.component.css']
})
export class MilestoneDetailsComponent implements OnInit {

  milestone: Milestone;

  constructor(private milestoneService: MilestoneService) {
    this.milestoneService.getMilestone.subscribe(() => {
      this.getMilestone();
    })
  }

  ngOnInit(): void {
  }

  getMilestone() {
    this.milestoneService.getSelectedMilestone((milestone) => {
      this.milestone = milestone;
    });
  }

}
