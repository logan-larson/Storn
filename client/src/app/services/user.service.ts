import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ClassItem } from '../models/ClassItem';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  classes: ClassItem[] = [];

  constructor(private http: HttpClient) {}

  getClasses(cb) {
    // Http GET to retrieve user's classes
    this.http
      .get('/api/v1/user/class')
      .subscribe((data: ClassItem[]) => {
        this.classes = data;
        cb(data);
      });
  }

  addProject(classItem: ClassItem, projectName: string, cb) {
    let ind = this.classes.findIndex((c) => c == classItem);
    this.classes[ind].projects.push({ name: projectName });
    cb();
  }

  addClass(className: String, cb) {
    this.http
      .post('/api/v1/user/class', { name: className })
      .subscribe((data: ClassItem) => {
        console.log("added class\n")
        this.classes.push({ _id: data._id, name: data.name, color: data.color, projects: data.projects });
        cb();
      });
  }

  deleteClass(className: String, cb) {
    this.http
      .request('delete', '/api/v1/user/class', { body: { name: className } })
      .subscribe((deletedClass: ClassItem) => {
        //let index = this.classes.indexOf(data);
        this.classes = this.classes.filter(c => c == deletedClass);
        cb();
      })
  }
}
