import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../models/Message';
import { Project } from '../models/Project';
import { Session } from '../models/Session';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor(
    private http: HttpClient,
    private projectService: ProjectService
  ) {}

  createSession(cb) {
    let s: Session = {
      start: new Date(),
      totalPauseTime: 0,
      totalTime: 0,
      projectId: this.projectService.getSelectedProject()._id,
    };
    this.http.post('/api/v1/session/start', s).subscribe((session: Session) => {
      cb(session);
    });
  }

  pauseStart(s: Session, cb) {
    this.http.put('/api/v1/session/pauseStart', s).subscribe((msg: Message) => {
      cb(msg);
    });
  }

  pauseEnd(s: Session, cb) {
    console.log(`session._id: ${s._id}`);
    this.http.put('/api/v1/session/pauseEnd', s).subscribe((t: Number) => {
      console.log(t);
      cb(t);
    });
  }

  endSession(s: Session, cb) {
    this.http.put('/api/v1/session/end', s).subscribe((t: any) => {
      let p: Project = this.projectService.getSelectedProject();
      p.details.totalTimeActual = t.totalTime;
      cb(t.sessionTime);
    });
  }
}
