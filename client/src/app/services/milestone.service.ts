import { EventEmitter, Injectable } from '@angular/core';
import { Milestone } from '../models/Milestone';

@Injectable({
  providedIn: 'root'
})
export class MilestoneService {

  milestone: Milestone;

  getMilestone: EventEmitter<string> = new EventEmitter<string>(); 

  constructor() {}

  setSelectedMilestone(milestone: Milestone) {
    this.milestone = milestone;

    this.getMilestone.emit("User selected different milestone");
  }

  getSelectedMilestone(cb) {
    cb(this.milestone);
  }

  saveMilestone(cb) {
    cb("saved");
  }
}
