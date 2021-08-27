import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ClassService } from 'src/app/services/class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  @Input() className: string;

  @Output() close: EventEmitter<any> = new EventEmitter();

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (
      // Gotta be a better way to optimize this
      event.target != document.getElementById('header')
      && event.target != document.getElementById('content')
      && event.target != document.getElementById('className')
      && event.target != document.getElementById('addClass')
      && event.target != document.getElementById('addClassButton')
    ) {
      console.log(event.target);
      this.close.emit("close me");
    }
  }

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    // Focus on input
  }

  addClass() {
    this.classService.addClass(this.className, () => {
      this.close.emit("close me");
    })
  }

}