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
  updateDetailsEmitter: EventEmitter<String> = new EventEmitter<String>();

  constructor(private http: HttpClient) { }

  setSelectedProject(id: string) {

    this.project = this.projects.find((project) => project._id == id);
    
    this.getProjectEmitter.emit("User selected different project");
  }

  getSelectedProject(cb) {
    cb(this.project);
  }

  saveProjectDetails(
    _id: String,
    details: ProjectDetails,
    cb) {

      this.http.put('/api/v1/project/details', { 
        _id: _id,
        details: details
      }).subscribe((msg: Message) => {
        this.updateDetailsEmitter.emit(_id);
        cb("saved");
      });
  }

  addProject(classItem: ClassItem, projectName: String, cb) {
    this.http.post(`/api/v1/project`, { id: classItem._id, projectName: projectName })
      .subscribe((project: Project) => {
        // push project into projects list
        this.projects.push(project);
        this.setSelectedProject(project._id);

        cb(project);
      })
  }

  getProjects(classItem: ClassItem, cb) {
    this.http.get(`/api/v1/projects/${classItem._id}`)
      .subscribe((projects: Project[]) => {
        this.projects = projects;
        cb(projects);

      })
  }

  getProjectById(id: String, cb) {
    this.http.get(`/api/v1/project/${id}`)
    .subscribe((project: Project) => {
      cb(project);
    });
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
