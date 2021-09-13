import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  calculateHours(time: number) {
    return Math.floor(time / 3600000);
  }

  calculateMinutes(time: number) {
    let hours = this.calculateHours(time);
    time = time - hours * 3600000;
    return Math.floor(time / 60000);
  }

  calculateSeconds(time: number) {
    let hours = this.calculateHours(time);
    let minutes = this.calculateMinutes(time);
    time = time - hours * 3600000 - minutes * 60000;
    return Math.floor(time / 1000);
  }

  formatUnderTen(time: number) {
    let formattedTime;
    time < 10
      ? (formattedTime = '0' + time.toString())
      : (formattedTime = time.toString());
    return formattedTime;
  }

  formatTime(time: number) {
    let hours = this.formatUnderTen(this.calculateHours(time));
    let minutes = this.formatUnderTen(this.calculateMinutes(time));
    let seconds = this.formatUnderTen(this.calculateSeconds(time));

    return `${hours}:${minutes}:${seconds}`;
  }
}
