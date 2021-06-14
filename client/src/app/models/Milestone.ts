export interface Milestone {
  name: string;
  // temporarily optional
  description?: string;
  timeEstimated?: number;
  timeActual?: number;
  deadline?: number;
}