import { ProjectBoard } from "./ProjectBoard";
import { ProjectDetails } from "./ProjectDetails";

export interface Project {
  id: string,
  name: string;
  details?: ProjectDetails;
  board?: ProjectBoard;
}