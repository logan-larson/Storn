import { Time } from "@angular/common";

export interface ProjectDetails {
  _id?: String,
  name: String,
  description: string;
  dateStarted: Date; 
  deadline: Date;
  totalTimeEstimated: Time;
  totalTimeActual: Time;
}