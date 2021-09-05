import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-project-timer',
  templateUrl: './project-timer.component.html',
  styleUrls: ['./project-timer.component.css']
})
export class ProjectTimerComponent implements OnInit {

  @Input() project: Project;

  startStop: String = "Start";
  pauseResume: String = "Pause";

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  changeStartStop() {
    if (this.startStop == "Start") {
      this.startStop = "Stop";
      this.timerService.createSession(() => {
        console.log("started session");
      });
    } else {
      this.startStop = "Start";
    }
  }

  changePauseResume() {
    if (this.pauseResume == "Pause") {
      this.pauseResume = "Resume";
      // Change state to BE
    } else {
      this.pauseResume = "Pause";
    }
  }
}
