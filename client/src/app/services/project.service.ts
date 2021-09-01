import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ClassItem } from '../models/ClassItem';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  // Needs renaming to more intuitive names

  projects: Project[] = [];

  project: Project = this.projects[0];

  getProject: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  setSelectedProject(id: string) {
    this.project = this.projects.find((project) => project._id == id);
    
    this.getProject.emit("User selected different project");
  }

  getSelectedProject(cb) {
    cb(this.project);
  }

  saveProjectDetails(cb) {
    cb("saved");
  }

  addProject(classItem: ClassItem, projectName: String, cb) {
    this.http.post(`/api/v1/project`, { id: classItem._id, projectName: projectName })
      .subscribe((project: Project) => {
        // push project into projects list
        this.projects.push({
          _id: project._id,
          classId: project.classId,
          name: project.name,
          details: project.details,
          board: project.board
        })
        cb(project);
      })
  }

  getProjects(classItem: ClassItem, cb) {
    this.http.request('get', `/api/v1/project/${classItem._id}`)
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        cb(projects);

      })
  }
}
