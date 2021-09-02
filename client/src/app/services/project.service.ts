import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { ClassItem } from '../models/ClassItem';
import { Message } from '../models/Message';
import { Project } from '../models/Project';
import { ProjectDetails } from '../models/ProjectDetails';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  
  // Needs renaming to more intuitive names

  projects: Project[] = [];

  project: Project = this.projects[0];

  getProjectEmitter: EventEmitter<string> = new EventEmitter<string>();

  getProjectsEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) { }

  setSelectedProject(id: string) {

    this.project = this.projects.find((project) => project._id == id);
    
    this.getProjectEmitter.emit("User selected different project");
  }

  getSelectedProject(cb) {
    cb(this.project);
  }

  saveProjectDetails(
    name: String,
    deadline: Date,
    timeHours: Number,
    timeMinutes: Number, 
    cb) {

      this.http.put('/api/v1/project', { 
        name: name, 
        deadline: deadline,
        timeHours: timeHours,
        timeMinutes: timeMinutes   
      }).subscribe((projectDetails: ProjectDetails) => {
        cb("saved");
      });
  }

  addProject(classItem: ClassItem, projectName: String, cb) {
    this.http.post(`/api/v1/project`, { id: classItem._id, projectName: projectName })
      .subscribe((project: Project) => {
        // push project into projects list
        this.projects.push({
          _id: project._id,
          classId: project.classId,
          details: project.details,
          board: project.board
        })
        
        this.setSelectedProject(project._id);

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

  deleteProject(project: Project, cb) {
    if (confirm(`Are you sure you want to delete ${project.details.name}?`)) {
      this.http
        .request('delete', '/api/v1/project', { body: project })
        .subscribe((deletedProject: Message) => {
          this.projects = this.projects.filter(p => p != project);
          this.getProjectsEmitter.emit("get the projects");
          this.project = this.projects[0];

          if (!this.project) {
            this.project = null;
            this.getProjectEmitter.emit("get null project");
            cb();
            return;
          }

          this.setSelectedProject(this.project._id);
          cb();
        })
    }
  }
}
