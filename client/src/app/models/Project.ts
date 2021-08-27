import { ProjectBoard } from "./ProjectBoard";
import { ProjectDetails } from "./ProjectDetails";

export interface Project {
  _id: string,
  classId: String,
  name: String;
  details?: ProjectDetails;
  board?: ProjectBoard;
}