import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassItem } from '../models/ClassItem';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  classes: ClassItem[] = [
    {
      name: "CS402",
      projects: [{ name: "DeckBuilder" }, { name: "WeatherList" }]
    },
    {
      name: "CS442",
      projects: [{ name: "FinalProject" }, { name: "FinalExam" }]
    }
  ];

  constructor(private http: HttpClient) { }

  getClasses(cb) {
    cb(this.classes);
  }

  addProject(classItem: ClassItem, projectName: string, cb) {
    let ind = this.classes.findIndex(c => c == classItem);
    this.classes[ind].projects.push({ name: projectName });
    cb();
  }

  addClass(className: string, cb) {
    this.classes.push({ name: className, projects: [] });
    cb();
  }
}
