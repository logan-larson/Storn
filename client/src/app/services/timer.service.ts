import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from '../models/Session';
import { ProjectService } from './project.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(private http: HttpClient, private projectService: ProjectService) { }

  createSession(cb) {
    let s: Session = {
      start: new Date(),
      totalPauseTime: 0,
      totalTime: 0,
      projectId: this.projectService.getSelectedProject()._id
    }
    this.http.post('/api/v1/session/start', s)
      .subscribe((session: Session) => {
        cb();
    });
  }

}
