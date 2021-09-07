import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';
import { Session } from 'src/app/models/Session';
import { ProjectService } from 'src/app/services/project.service';
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
  session: Session;
  hours: Number;
  minutes: Number;

  constructor(private timerService: TimerService, private projectService: ProjectService) { }

  ngOnInit(): void {
  }

  changeStartStop() {
    if (this.startStop == "Start") {
      this.timerService.createSession((session: Session) => {
        this.session = session;
        this.startStop = "Stop";
      });
    } else {
      this.session.end = new Date();
      this.timerService.endSession(this.session, () => {
        this.startStop = "Start";
      })
    }
  }

  changePauseResume() {
    if (this.pauseResume == "Pause" && this.startStop == "Stop") {
      this.session.pauseStart = new Date();
      this.timerService.pauseStart(this.session, () => {
        this.pauseResume = "Resume";
      })
      // Change state to BE
    } else if (this.pauseResume == "Resume" && this.startStop == "Stop") {
      this.session.pauseEnd = new Date();
      this.timerService.pauseEnd(this.session, () => {
        this.pauseResume = "Pause";
      })
    }
  }
}
