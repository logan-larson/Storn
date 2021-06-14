import { Milestone } from "./Milestone";

export interface ProjectBoard {
  todoColumn: Milestone[];
  doingColumn: Milestone[];
  doneColumn: Milestone[];
}