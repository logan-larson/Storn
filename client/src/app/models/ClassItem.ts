import { ProjectItem } from './ProjectItem';

export interface ClassItem {
  _id: String;
  userId: String;
  name: String;
  color: String;
  projects: ProjectItem[];
}