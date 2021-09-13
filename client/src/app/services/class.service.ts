import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassItem } from '../models/ClassItem';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  classes: ClassItem[] = [];

  constructor(private http: HttpClient) {}

  getClasses(cb) {
    // Http GET to retrieve user's classes
    this.http
      .get('/api/v1/class')
      .subscribe((classes: ClassItem[]) => {
        this.classes = classes;
        cb(classes);
      });
  }

  addClass(className: String, cb) {
    this.http
      .post('/api/v1/class', { name: className })
      .subscribe((classItem: ClassItem) => {
        this.classes.push(
          {
            _id: classItem._id,
            userId: classItem.userId,
            name: classItem.name,
            color: classItem.color,
          });
        cb();
      });
  }

  deleteClass(classItem: ClassItem, cb) {
    if (confirm(`Are you sure you want to delete ${classItem.name}?
                \nThis will delete ALL projects in a class.`)) {
      this.http
        .request('delete', '/api/v1/class', { body: classItem })
        .subscribe((deletedClass: Message) => {
          this.classes = this.classes.filter(c => c != classItem);
          cb();
        })
    }
  }
}
