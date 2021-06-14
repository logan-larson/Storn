import { EventEmitter, Injectable } from '@angular/core';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  // Needs renaming to more intuitive names

  projects: Project[] = [
    { 
      id: "1", 
      name: "DeckBuilder", 
      details: { 
        description: "This is a description!",
        totalTimeEstimated: 45,
        totalTimeActual: 30,
        deadline: 69
      },
      board: {
        todoColumn: [{name: "Milestone 3"}],
        doingColumn: [{name: "Milestone 2"}],
        doneColumn: [{name: "Milestone 1"}]
      }
    },
    { id: "2", name: "WeatherList" },
    { id: "3", name: "FinalProject" },
    { id: "4", name: "FinalExam" },
  ];

  project: Project = this.projects[0];

  getProject: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setSelectedProject(id: string) {
    this.project = this.projects.find((project) => project.id == id);
    
    this.getProject.emit("User selected different project");
  }

  getSelectedProject(cb) {
    // Pull project from database
    cb(this.project);
  }

  saveProjectDetails(cb) {
    cb("saved");
  }
}
