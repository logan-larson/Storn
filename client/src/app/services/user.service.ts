import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassItem } from '../models/ClassItem';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  classes: ClassItem[] = [
    {
      name: 'CS402',
      projects: [
        { id: '1', name: 'DeckBuilder' },
        { id: '2', name: 'WeatherList' },
      ],
    },
    {
      name: 'CS442',
      projects: [
        { id: '3', name: 'FinalProject' },
        { id: '4', name: 'FinalExam' },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  getClasses(cb) {
    cb(this.classes);
  }

  addProject(classItem: ClassItem, projectName: string, cb) {
    let ind = this.classes.findIndex((c) => c == classItem);
    this.classes[ind].projects.push({ name: projectName });
    cb();
  }

  addClass(className: string, cb) {
    this.http
      .post('/api/v1/user/class', { name: className })
      .subscribe((data: ClassItem) => {
        this.classes.push({ name: data.name, projects: [] });
        cb();
      });
  }
}
