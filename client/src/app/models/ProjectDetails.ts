import { TimeModel } from "./TimeModel";

export interface ProjectDetails {
  _id?: String,
  name: String,
  description: String;
  dateStarted?: Date; 
  deadline: Date;
  totalTimeEstimated: TimeModel;
  totalTimeActual?: TimeModel;
}