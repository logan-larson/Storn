export interface Session {
  _id?: String;
  start: Date;
  end?: Date;
  pauseStart?: Date;
  pauseEnd?: Date;
  totalPauseTime: Number;
  totalTime: Number;
  projectId: String;
}